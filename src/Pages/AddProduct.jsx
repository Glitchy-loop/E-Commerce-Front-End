import React, { useState, useEffect } from "react"
import Container from "../components/Container/Container"
import Title from "../components/Title/Title"
import AddProductForm from "../components/AddProduct/AddProductForm"
import Notification from "../components/Notification/Notification"
import { useNavigate } from "react-router-dom"
import DashboardNav from "../components/DashboardNav/DashboardNav"
import { storage } from "../firebase"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"

const adminLinks = [
  { url: "/dashboard", title: "Dashboard" },
  { url: "/dashboard/view-products", title: "View products" },
  { url: "/dashboard/add", title: "Add product" },
  { url: "/dashboard/orders", title: "Orders" },
]
const clientLinks = [
  { url: "/dashboard", title: "Dashboard" },
  { url: "/dashboard/orders", title: "Orders" },
]
const AddProduct = () => {
  const [error, setError] = useState()
  const [token] = useState(localStorage.getItem("token"))
  const [roles] = useState(localStorage.getItem("roles"))
  const [progress, setProgress] = useState(0)
  const [imgUrl, setImgUrl] = useState("")

  const links = roles === "1" ? adminLinks : clientLinks

  const navigate = useNavigate()
  useEffect(() => {
    if (!token || roles !== "1") {
      navigate("/dashboard")
    }
  }, [])

  const addNewProduct = async (inputs) => {
    const fd = new FormData()

    fd.append("img", inputs.img)
    fd.append("title", inputs.title)
    fd.append("category", inputs.category)
    fd.append("price", Number(inputs.price))
    fd.append("description", inputs.description)
    fd.append("inStock", Number(inputs.inStock))

    const file = fd.get("img")
    // console.log(file.name)

    const storageRef = ref(storage, `/files/${file.name}`)

    try {
      // Upload progress
      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          )
          setProgress(prog)
          setError(prog)
        },
        (err) => console.log(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((url) => {
              setImgUrl(url)
              console.log(imgUrl)
            })
            .then(postData())
        }
      )
      const postData = async () => {
        try {
          const productData = {
            img: imgUrl,
            title: fd.get("title"),
            category: fd.get("category"),
            price: Number(fd.get("price")),
            description: fd.get("description"),
            inStock: Number(fd.get("inStock")),
          }
          console.log(JSON.stringify(productData))

          const res = await fetch(
            `${process.env.REACT_APP_BACKEND_URL}/v1/products/add`,
            {
              method: "POST",
              headers: {
                authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify(productData),
            }
          )
          console.log(res)
          const data = await res.json()
          console.log(data)

          if (data.err) {
            return setError(data.err)
          }

          if (data.msg) {
            setError(data.msg)
            navigate("/dashboard/view-products")
          }
        } catch (err) {
          setError(err.message)
        }
      }
    } catch (err) {
      return setError(err.message)
    }
  }

  return (
    <>
      <Container>
        <Title title='Add a new product' />

        {roles === "1" && <DashboardNav links={links}></DashboardNav>}
        {roles === "0" && <DashboardNav links={links}></DashboardNav>}

        {error && <Notification>{error}</Notification>}
        <AddProductForm handleSubmit={addNewProduct} />
      </Container>
    </>
  )
}

export default AddProduct
