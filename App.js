import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
    const [display, setDisplay] = useState('0');
    const [operar, setOperar] = useState(null);
    const [operador, setOperador] = useState(null);

    const pressioneButton = (value) => {
        if (display === '0' || operador === 'C') {
            setDisplay(value);
        } else {
            setDisplay(display + value);
        }
    };

    const pressioneOperador = (operacao) => {
        setOperar(parseFloat(display));
        setOperador(operacao);
        if (operacao === 'C') {
            setDisplay('0');
            setOperar(null);
            setOperador(null);
        } else {
            setDisplay('0');
        }
    };

    const calcular = () => {
        const num = parseFloat(display);
        switch (operador) {
            case '+':
                setDisplay((operar + num).toString());
                break;
            case '-':
                setDisplay((operar - num).toString());
                break;
            case '*':
                setDisplay((operar * num).toString());
                break;
            case '/':
                setDisplay((operar / num).toString());
                break;
            case '√':
                setDisplay((Math.sqrt(num)).toString())
        }
        setOperar(null);
        setOperador(null);
    };

    return (
        <View style={styles.container}>
            <View style={styles.display}>
                <Text style={styles.displayText}>{display}</Text>
            </View>
            <View style={styles.buttons}>
                {[...Array(10)].map((_, i) => (
                    <TouchableOpacity key={i.toString()} style={styles.button} onPress={() => pressioneButton(i.toString())}>
                        <Text style={styles.buttonText}>{i}</Text>
                    </TouchableOpacity>
                ))}
                <TouchableOpacity style={styles.button} onPress={() => pressioneOperador('+')}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => pressioneOperador('-')}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => pressioneOperador('*')}>
                    <Text style={styles.buttonText}>*</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => pressioneOperador('/')}>
                    <Text style={styles.buttonText}>/</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={calcular}>
                    <Text style={styles.buttonText}>=</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => pressioneOperador('C')}>
                    <Text style={styles.buttonText}>C</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => pressioneOperador('√')}>
                    <Text style={styles.buttonText}>√</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
  },
  display: {
      backgroundColor: '#f5f5f5',
      padding: 20,
      margin: 20,
      borderRadius: 10,
      backgroundColor: 'black'
  },
  displayText: {
      fontSize: 34,
      color: 'white',
      backgroundColor: 'black'
  },
  buttons: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
  },
  button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#DDDDDD',
      borderRadius: 10,
      width: '20%',
      aspectRatio: 1, 
      margin: '1%',
      backgroundColor: 'black'
  },
  buttonText: {
      fontSize: 24,
      color: 'white',
  },
});

export default App;
