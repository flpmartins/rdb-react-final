import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from '../shared/components/layout'
import {
  Dashboard,
  Products,
  Contact,
  SobreNos,
  EquipeObjetivo
} from '../pages'
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={
        <Layout>
          <Dashboard />
      </Layout>} />
      <Route path="/products" element={
        <Layout>
        </Layout>} />
      <Route path="/contact" element={
        <Layout>
          <Contact/>
        </Layout>} />
      <Route path="/sobre" element={
        <Layout>
        </Layout>} />
      <Route path="/equipe/objetivo" element={
        <Layout>
          <EquipeObjetivo />
        </Layout>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
