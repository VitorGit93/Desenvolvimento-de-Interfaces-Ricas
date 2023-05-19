import { Button, Grid, TextField, colors } from '@mui/material';
import { PlusCircle } from '@phosphor-icons/react';
import { useState } from 'react';
import { createTask } from '../../service/api';

/*
 * O componente TaskInput é responsável por criar uma nova task
 * e enviar para a API. Ao clicar no botão, o valor do campo é
 * enviado para a API  e a task é criada. 
 * O componente TaskInput é filho do componente TaskList.
 * O componente TaskList é filho do componente App.
 * O componente App é o componente principal da aplicação.
 */
export function TaskInput() {

    const [task, setTasks] = useState('');

    /*
    * A função handleCreateTask é responsável por criar uma nova task
    * e enviar para a API. Ao clicar no botão, o valor do campo é
    * enviado para a API  e a task é criada.
    */

    const handleCreateTask = () => {

        /*
        * Se o campo de texto estiver vazio, não faz nada.
        * Se o campo de texto não estiver vazio, cria uma nova task.
        * A task é criada com o status false, ou seja, a task é criada
        * com o status de não concluída.
        * A task é criada com a data atual.
        * A task é criada com um id aleatório.
        * A task é criada com o título e a descrição iguais ao valor
        * digitado no campo de texto.
        * A task é criada com o status false, ou seja, a task é criada
        * com o status de não concluída.
        */
        if (task.trim() === '') { return; }

        /*
        * Aqui se pode chamar a função de criação da task da API
        * passando o objeto newTask como parâmetro.
        * Por exemplo: createTask(newTask);
        * A função createTask recebe um objeto do tipo Task como parâmetro.
        * O objeto newTask é criado com os dados digitados pelo usuário.
        * O objeto newTask é criado com o status false, ou seja, a task é criada
        * com o status de não concluída.
        * O objeto newTask é criado com a data atual.
        * O objeto newTask é criado com um id aleatório.
        * O objeto newTask é criado com o título e a descrição iguais ao valor
        * digitado no campo de texto.
        * O objeto newTask é criado com o status false, ou seja, a task é criada
        * com o status de não concluída.
        * A função createTask é chamada passando o objeto newTask como parâmetro.
        * A função createTask é responsável por enviar a task para a API.
        */

        // Cria um objeto  de task com os dados digitados
        const novaTask = {
            id: Math.random() * 1000,
            titulo: task,
            descricao: task,
            data: new Date().toISOString(), // Pega a data atual e converte para string
            status: false
        }


        // Aqui se pode chamar a função de criação da task da API
        // Passando o objeto newTask como parâmetro
        // Por exemplo: createTask(newTask);

        /*
        * A função createTask recebe um objeto do tipo Task como parâmetro.
        * O objeto newTask é criado com os dados digitados pelo usuário.
        * O objeto newTask é criado com o status false, ou seja, a task é criada
        * com o status de não concluída.
        * O objeto newTask é criado com a data atual.
        * O objeto newTask é criado com um id aleatório.
        * O objeto newTask é criado com o título e a descrição iguais ao valor
        * digitado no campo de texto.
        * O objeto newTask é criado com o status false, ou seja, a task é criada
        * com o status de não concluída.
        * A função createTask é chamada passando o objeto newTask como parâmetro.
        * A função createTask é responsável por enviar a task para a API.
        */
        createTask(novaTask)

        // Limpa o campo de texto
        setTasks('');
    };

    return (
        <Grid container spacing={0.5}>

            <Grid item xl={10} sm={12}>

                {/*
            * O componente TextField é responsável por criar um campo de texto.
            * O componente TextField é filho do componente TaskInput.
            * O componente TaskInput é filho do componente TaskList.
            * O componente TaskList é filho do componente App.
            * O componente App é o componente principal da aplicação.
            * O componente TextField recebe os seguintes parâmetros:
            * name: nome do campo de texto.
            * value: valor do campo de texto.
            * placeholder: texto que aparece no campo de texto.
            * variant: tipo de campo de texto.
            * fullWidth: largura do campo de texto.
            * sx: estilo do campo de texto.
            * onChange: função que é chamada quando o valor do campo de texto é alterado.
            * A função onChange recebe um evento como parâmetro.
            * O evento é disparado quando o valor do campo de texto é alterado.
            * A função onChange é responsável por alterar o valor do campo de texto.
            * A função onChange é responsável por alterar o valor da variável task.
            */}
                <TextField
                    name="task"
                    value={task}
                    placeholder='Adcione uma nova task'
                    variant='outlined'
                    fullWidth sx={{ backgroundColor: colors.grey[800] }}
                    onChange={(e) => setTasks(e.target.value)}
                />



            </Grid>
            <Grid item xl={2} sm={12}>

            {/*
            * O componente Button é responsável por criar um botão.
            * O componente Button é filho do componente TaskInput.
            * O componente TaskInput é filho do componente TaskList.
            * O componente TaskList é filho do componente App.
            * O componente App é o componente principal da aplicação.
            * O componente Button recebe os seguintes parâmetros:
            * variant: tipo de botão.
            * onClick: função que é chamada quando o botão é clicado.
            * fullWidth: largura do botão.
            * sx: estilo do botão.
            * O componente Button recebe um ícone como filho.
            * O ícone é o componente PlusCircle.
            * O ícone é importado do pacote react-feather.
            * O ícone é um círculo com um sinal de + no centro.
            * O ícone é um botão que, ao ser clicado, cria uma nova task.
            * O ícone é um botão que, ao ser clicado, chama a função handleCreateTask.
            */}
                <Button
                    variant="contained"
                    onClick={handleCreateTask}
                    fullWidth sx={{ height: '100%' }}>
                    <span> Criar </span> <PlusCircle size={32} />
                </Button>
            </Grid>
        </Grid>
    );
}

