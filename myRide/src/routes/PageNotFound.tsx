import { WarningCircle } from "@phosphor-icons/react/dist/ssr"
import '../components/styles/page404.css'

const PageNotFound = () => {
  return (
    <div className="warning">
      <WarningCircle size={600} color="#FBA403" />
      <h1>Página não encontrada</h1>
    </div>
  )
}

export default PageNotFound