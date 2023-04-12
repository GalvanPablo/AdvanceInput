import React from 'react'
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'

import { useState } from 'react'

import { AdvanceInput } from '../components'

const Formulario = () => {

    const [email, setEmail] = useState(null)
    const [phone, setPhone] = useState(null)
    const [number, setNumber] = useState(null)
    const [text, setText] = useState(null)
    const [maxMin, setMaxMin] = useState(null)

    const formValido = () => {
        if(email.isValid && phone.isValid && number.isValid && text.isValid && maxMin.isValid) {
            alert('Todo correcto')
        } else {
            alert('Algun campo no es valido')
        }
    }

    return (
        <SafeAreaView style={styles.screen}>
            <ScrollView style={styles.scroll}>
                <Text style={styles.title}>Formulario</Text>
                <AdvanceInput
                    type='email'
                    onInputChange={(data) => setEmail(data)}
                    placeholder={'Email'}
                    errorPosition='top'
                    inputStyle={{
                        borderWidth: 0,
                        borderBottomWidth: 1,
                    }}
                />
                <AdvanceInput
                    type='phone'
                    onInputChange={(data) => setPhone(data)}
                    placeholder={'Telefono'}
                    errorPosition='top'
                    inputStyle={{
                        borderWidth: 0,
                        borderBottomWidth: 1,
                    }}
                />
                <AdvanceInput
                    type='number'
                    onInputChange={(data) => setNumber(data)}
                    required
                    placeholder={'Numero'}
                    errorPosition='top'
                    inputStyle={{
                        borderWidth: 0,
                        borderBottomWidth: 1,
                    }}
                />
                <AdvanceInput
                    type='text'
                    onInputChange={(data) => setText(data)}
                    required
                    label={'Texto'}
                />
                <AdvanceInput
                    type='text'
                    onInputChange={(data) => {setMaxMin(data)}}
                    minLength={3}
                    maxLength={5}
                    label={'Max y Min longitud'}
                />

                <View style={styles.valores}>
                    <Text>Email: {email?.value}</Text>
                    <Text>Telefono: {phone?.value}</Text>
                    <Text>Numero: {number?.value}</Text>
                    <Text>Texto: {text?.value}</Text>
                    <Text>MaxMin: {maxMin?.value}</Text>
                </View>

                <Button title='Comprobar' onPress={() => formValido()} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Formulario

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    scroll: {
        flex: 1,
        height: '100%',
        width: '80%',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 20
    },
    valores: {
        marginVertical: 20
    }
})