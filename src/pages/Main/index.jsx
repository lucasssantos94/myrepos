import * as Styles from "./styles.js";
import {FaGithub, FaPlus} from 'react-icons/fa'

export default function Main() {
  return (
    <Styles.Container>
        <h1>
            <FaGithub size={30}/>
            Meus Repositórios
        </h1>

        <Styles.Form onSubmit={() => {}}>
            <input type="text" placeholder="Digite o nome do repositório"/>

            <Styles.SubmitButton type="submit">
                <FaPlus size={14} color="#fff"/>
            </Styles.SubmitButton>
        </Styles.Form>
    </Styles.Container>
  )
}
