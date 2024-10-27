import { useState, useCallback } from "react";
import api from "../../services/api";

import * as Styles from "./styles.js";
import {FaGithub, FaPlus} from 'react-icons/fa'

export default function Main() {
    const [newRepo, setNewRepo] = useState('')
    const [repositories, setRepositories] = useState([])

    const handleAddRepository = useCallback((e) => {
        e.preventDefault();

        async function submit() {
            const response = await api.get(`repos/${newRepo}`)
            
        
            const data = {
            name: response.data.full_name,
        }       

        setRepositories([...repositories, data])
        setNewRepo('')
        
        }

        submit()
       
    }, [newRepo, repositories])


    function handleInputChange(e) {
        setNewRepo(e.target.value)
    }   

  return (
    <Styles.Container>
        <h1>
            <FaGithub size={30}/>
            Meus Repositórios
        </h1>

        <Styles.Form onSubmit={handleAddRepository}>
            <input 
                type="text" 
                placeholder="Adicionar Repositórios"
                value={newRepo}
                onChange={handleInputChange}
                
            />
                

            <Styles.SubmitButton>
                <FaPlus size={14} color="#fff"/>
            </Styles.SubmitButton>
        </Styles.Form>
    </Styles.Container>
  )
}
