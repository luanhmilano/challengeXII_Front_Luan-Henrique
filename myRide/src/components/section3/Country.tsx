import axios from 'axios';
import { useEffect, useState } from 'react'

interface Paises {
    nome: {
        abreviado: string
    }
}

const Country = () => {

    const [countries, setCountries] = useState<string[] | null>(null)

  useEffect(() => {
        const fetchCountry = async () => {
            try {
                const response = await axios.get("https://servicodados.ibge.gov.br/api/v1/paises/{paises}");

                const countries = new Set<string>()
                response.data.map((item: Paises) => {
                    countries.add(item.nome.abreviado)
                })

                const sortCountries = Array.from(countries).sort((a, b) => a.localeCompare(b))

                setCountries(sortCountries)

            } catch (error) {
                console.error('Erro ao buscar países: ', error)
            }
        }
        fetchCountry()
}, [])

  return (
        <fieldset>
                <legend>Country</legend>
                <select id="countries">
                    {countries?.map((item, index) => (
                        <option key={"country" + index} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
        </fieldset>
  )
}

export default Country