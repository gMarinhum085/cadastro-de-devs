const add = document.getElementById('add')
const form = document.getElementById('form')

form.addEventListener('submit', (ev) =>{
    ev.preventDefault()

    add.addEventListener('click', (ev) =>{
        ev.preventDefault()

        let number_input = 0
        number_input++

        const button_cadastrar = document.getElementById('cadastrar')
        const div = document.getElementById('evento')

        const evento = document.createElement('div')
        const br = document.createElement('br')
        const br_1 = document.createElement('br')
        const br_2 = document.createElement('br')
        const br_3 = document.createElement('br')

        const label_Tecno = document.createElement('label')
        label_Tecno.innerText = 'Nome da tecnologia'
        label_Tecno.setAttribute('for','tecnologias') 

        const input_tecno = document.createElement('input')
        input_tecno.type = 'text'
        input_tecno.name = 'tecnologias'
        input_tecno.id = 'tecnologias'
        input_tecno.placeholder = 'Nome da tecnologia'
        input_tecno.className = 'input_text_tecnologias'

        const tempo_exp = document.createElement('label')
        tempo_exp.innerText = 'Tempo de experiência:'
        tempo_exp.setAttribute('for','input_time' + number_input) 

        const input1 = document.createElement('input')
        input1.type = 'radio'
        input1.name = 'input_time' + number_input
        input1.id ='input_time1-' + number_input
        input1.value = '0-2 anos'

        const label1 = document.createElement('label')
        label1.innerText = '0-2 anos'
        label1.setAttribute('for', 'input_time1-' + number_input)

        const input2 = document.createElement('input')
        input2.type = 'radio'
        input2.name = 'input_time' + number_input
        input2.id ='input_time2-' + number_input
        input2.value = '3-4 anos'

        const label2 = document.createElement('label')
        label2.innerText = '3-4 anos'
        label2.setAttribute('for', 'input_time2-' + number_input)

        const input3 = document.createElement('input')
        input3.type = 'radio'
        input3.name = 'input_time' + number_input
        input3.id ='input_time3-' + number_input
        input3.value = '5+ anos'

        const label3 = document.createElement('label')
        label3.innerText = '5+ anos'
        label3.setAttribute('for', 'input_time3-' + number_input)

        const remove = document.createElement('button')
        remove.innerText = 'Remover'

        evento.append(label_Tecno,br,input_tecno,br_1,tempo_exp,br_2,input1,label1,input2,label2,input3,label3,br_3,remove)
        div.appendChild(evento)
        form.appendChild(div)

        remove.addEventListener('click', (ev) =>{
            ev.preventDefault()
            div.removeChild(evento)
        })

        button_cadastrar.addEventListener('click', (ev) => {
            ev.preventDefault()

            const name = document.getElementById('name').value
            const tecnologia_name = input_tecno.value
            let time_tecnologias = ''

            document.querySelectorAll("input[type= 'radio']:checked").forEach(function (item){
                time_tecnologias += ' - ' + item.value + '\n'
            })

            console.log({name, tecnologia_name, time_tecnologias})

            alert(
                "Cadastro do desenvolvedor concluído" +
            "\nNome do desenvolvedor: " + name +
            "\nNome da tecnologia: " + tecnologia_name +
            "\nTempo de experiência: " + time_tecnologias
            )
        })
    })
})