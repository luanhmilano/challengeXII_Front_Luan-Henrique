import Footer from "../components/Footer"
import Header from "../components/Header"
import Section1 from "../components/section1/Section1"
import Section2 from "../components/section2/Section2"
import DriverForm from "../components/section3/DriverForm"

const HomePage = () => {
  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <DriverForm />
      <Footer />
    </>
  )
}

export default HomePage