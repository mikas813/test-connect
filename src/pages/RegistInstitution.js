import React from 'react'
import Header from '../components/common/Header'
import Breadcrumb from '../components/common/Breadcrumb'
import Footer from '../components/common/Footer'
import ScrollTop from '../components/common/ScrollTop'
import FormMapInstitution from '../components/formMap/FormMapInstitution'

export const RegistInstitution = () => {
  return (
    <main className="contact">
      <Header/>
      <Breadcrumb title="Registar Instituiçāo"/>
      <FormMapInstitution/>
      <ScrollTop/>
      <Footer/>
    </main>
  )
}
