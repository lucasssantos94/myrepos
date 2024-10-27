import { useState, useCallback } from "react";
import api from "../../services/api";

import * as Styles from "./styles.js";
import { FaGithub, FaPlus, FaSpinner } from "react-icons/fa";

export default function Main() {
  const [newRepo, setNewRepo] = useState("");
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAddRepository = useCallback(
    (e) => {
      e.preventDefault();

      async function submit() {
        setLoading(true);
        try {
          const response = await api.get(`repos/${newRepo}`);

          const data = {
            name: response.data.full_name,
          };

          setRepositories([...repositories, data]);
          setNewRepo("");
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }

      submit();
    },
    [newRepo, repositories]
  );

  function handleInputChange(e) {
    setNewRepo(e.target.value);
  }

  return (
    <Styles.Container>
      <h1>
        <FaGithub size={30} />
        Meus Repositórios
      </h1>

      <Styles.Form onSubmit={handleAddRepository}>
        <input
          type="text"
          placeholder="Adicionar Repositórios"
          value={newRepo}
          onChange={handleInputChange}
        />

        <Styles.SubmitButton loading={loading ? 1 : 0}>
            {loading ? (
              <FaSpinner color="#fff" size={14} />
            ) : (
              <FaPlus color="#fff" size={14} />
            )}
        </Styles.SubmitButton>
      </Styles.Form>
    </Styles.Container>
  );
}
