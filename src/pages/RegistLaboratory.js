import React from 'react'
import Header from '../components/common/Header'
import Breadcrumb from '../components/common/Breadcrumb'
import Footer from '../components/common/Footer'
import ScrollTop from '../components/common/ScrollTop'
import FormMapLaboratory from '../components/formMap/FormMapLaboratory'

export const RegistLaboratory = () => {
  return (
    <main className="contact">
      <Header/>
      <Breadcrumb title="Registar Laboratório"/>
      <FormMapLaboratory/>
      <ScrollTop/>
      <Footer/>
    </main>
  )
}
