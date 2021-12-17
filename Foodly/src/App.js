import React, { useState } from 'react'

import {
  SafeAreaView,
  StatusBar,
  View,
  TextInput,
  Button,
  Text
} from 'react-native'

import { Picker } from '@react-native-picker/picker'

import makeStyles from './utils/makeStyles'

const initialFormState = {
  name: '',
  address: '',
  food: 'Pizza'
}

const foods = ['Pizza', 'Burger', 'Salad', 'Sandwich', 'Soup']

function App() {
  const [form, setForm] = useState(initialFormState)
  const [order, setOrder] = useState()

  const disabled = React.useMemo(
    () => Object.values(form).some(value => !value),
    [form]
  )

  const styles = useStyles({ disabled })

  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.container}>
        <TextInput
          placeholder="Name"
          onChangeText={name => setForm(prev => ({ ...prev, name }))}
          value={form.name}
          style={styles.input}
        />
        <TextInput
          placeholder="Address"
          onChangeText={address => setForm(prev => ({ ...prev, address }))}
          value={form.address}
          style={styles.input}
        />
        <Picker
          selectedValue={form.food}
          onValueChange={food => setForm(prev => ({ ...prev, food }))}>
          {foods.map(food => (
            <Picker.Item key={food} label={food} value={food} />
          ))}
        </Picker>
        <View style={styles.button}>
          <Button
            title="SUBMIT"
            onPress={() => setOrder(form)}
            disabled={disabled}
          />
        </View>
        <Text style={styles.header}>ORDER:</Text>
        {order &&
          Object.entries(order).map(([key, value]) => (
            <View key={key} style={styles.item}>
              <Text style={styles.itemName}>{key}: </Text>
              <Text>{value}</Text>
            </View>
          ))}
      </View>
    </SafeAreaView>
  )
}

const useStyles = makeStyles(props => ({
  container: {
    backgroundColor: '#FFF',
    padding: 16
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 4,
    marginBottom: 10
  },
  button: {
    backgroundColor: props.disabled ? '#eee' : '#f194ff',
    borderRadius: 5,
    marginBottom: 18
  },
  header: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10
  },
  item: {
    flexDirection: 'row',
    marginBottom: 5
  },
  itemName: {
    textTransform: 'capitalize',
    fontWeight: 'bold'
  }
}))

export default App
