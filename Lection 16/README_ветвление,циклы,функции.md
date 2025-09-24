# Характеристика языка Python: Условные операторы, циклы и функции

## Условный оператор `if` в Python

Условный оператор `if` в Python используется для проверки истинности или ложности условия. Он содержит логическое выражение, которое сравнивает данные, и на основе результата принимается решение.

### Синтаксис оператора `if`

```python
if выражение:
    # выполняемые инструкции
```

Если логическое выражение возвращает `True`, выполняется блок кода внутри `if`. Если выражение возвращает `False`, выполняется код, следующий за блоком `if`.

### Пример оператора `if`

Рассмотрим пример: покупатель получает скидку 10% при сумме покупки более 1000, иначе скидка не предоставляется.

```python
discount = 0
amount = 1200

# Проверка суммы
if amount > 1000:
    discount = amount * 10 / 100

print("amount = ", amount - discount)
```

**Вывод при `amount = 1200`:**

```
amount = 1080.0
```

**Вывод при `amount = 800`:**

```
amount = 800
```

---

## Условный оператор `if-else`

Оператор `if-else` позволяет выполнить один блок кода, если условие истинно, и другой — если ложно.

### Синтаксис `if-else`

```python
if логическое_выражение:
    # код выполняется, если выражение истинно
else:
    # код выполняется, если выражение ложно
```

### Пример `if-else`

Пример проверки возраста для права голосования:

```python
age = 25
print("age: ", age)
if age >= 18:
    print("eligible to vote")
else:
    print("not eligible to vote")
```

**Вывод при `age = 25`:**

```
age: 25
eligible to vote
```

**Вывод при `age = 12`:**

```
age: 12
not eligible to vote
```

---

## Условный оператор `if-elif-else`

Оператор `if-elif-else` позволяет проверять несколько условий последовательно и выполнять код для первого истинного условия.

### Синтаксис `if-elif-else`

```python
if выражение1:
    инструкция(и)
elif выражение2:
    инструкция(и)
elif выражение3:
    инструкция(и)
else:
    инструкция(и)
```

### Пример `if-elif-else`

Пример расчета скидки в зависимости от суммы покупки:
- 20% для суммы более 10000
- 10% для суммы от 5000 до 10000
- 5% для суммы от 1000 до 5000
- Без скидки, если сумма < 1000

```python
amount = 2500
print('Amount = ', amount)
if amount > 10000:
    discount = amount * 20 / 100
elif amount > 5000:
    discount = amount * 10 / 100
elif amount > 1000:
    discount = amount * 5 / 100
else:
    discount = 0

print('Payable amount = ', amount - discount)
```

**Вывод:**

```
Amount: 2500
Payable amount = 2375.0
```

---

## Вложенные условные операторы `if`

Python поддерживает вложенные операторы `if`, которые позволяют проверять дополнительные условия внутри существующего блока `if`.

### Синтаксис вложенного `if`

```python
if логическое_выражение1:
    инструкция(и)
    if логическое_выражение2:
        инструкция(и)
```

### Пример вложенного `if`

Пример проверки делимости числа на 2 и 3:

```python
num = 36
print("num = ", num)
if num % 2 == 0:
    if num % 3 == 0:
        print("Divisible by 3 and 2")
print("....execution ends....")
```

**Вывод:**

```
num = 36
Divisible by 3 and 2
....execution ends....
```

### Пример вложенного `if` с `else`

```python
num = 8
print("num = ", num)
if num % 2 == 0:
    if num % 3 == 0:
        print("Divisible by 3 and 2")
    else:
        print("divisible by 2 not divisible by 3")
else:
    if num % 3 == 0:
        print("divisible by 3 not divisible by 2")
    else:
        print("not Divisible by 2 not divisible by 3")
```

**Вывод для разных значений `num`:**

```
num = 8
divisible by 2 not divisible by 3
num = 15
divisible by 3 not divisible by 2
num = 12
Divisible by 3 and 2
num = 5
not Divisible by 2 not divisible by 3
```

---

## Оператор `match-case`

Оператор `match-case`, введенный в Python 3.10, позволяет сравнивать значение выражения с несколькими шаблонами. Выполняется только первый подходящий шаблон.

### Синтаксис `match-case`

```python
match переменная:
    case шаблон_1: инструкция_1
    case шаблон_2: инструкция_2
    ...
    case шаблон_n: инструкция_n
```

### Пример `match-case`

Функция, возвращающая название дня недели по номеру:

```python
def weekday(n):
    match n:
        case 0: return "Monday"
        case 1: return "Tuesday"
        case 2: return "Wednesday"
        case 3: return "Thursday"
        case 4: return "Friday"
        case 5: return "Saturday"
        case 6: return "Sunday"
        case _: return "Invalid day number"

print(weekday(3))
print(weekday(6))
print(weekday(7))
```

**Вывод:**

```
Thursday
Sunday
Invalid day number
```

### Объединение случаев в `match`

Можно комбинировать несколько шаблонов с помощью оператора `|`:

```python
def access(user):
    match user:
        case "admin" | "manager": return "Full access"
        case "Guest": return "Limited access"
        case _: return "No access"

print(access("manager"))
print(access("Guest"))
print(access("Ravi"))
```

**Вывод:**

```
Full access
Limited access
No access
```

### Использование списков в `match-case`

Списки можно использовать как аргументы в `match-case`:

```python
def greeting(details):
    match details:
        case [time, name]:
            return f'Good {time} {name}!'
        case [time, *names]:
            msg = ''
            for name in names:
                msg += f'Good {time} {name}!\n'
            return msg

print(greeting(["Morning", "Ravi"]))
print(greeting(["Afternoon", "Guest"]))
print(greeting(["Evening", "Kajal", "Praveen", "Lata"]))
```

**Вывод:**

```
Good Morning Ravi!
Good Afternoon Guest!
Good Evening Kajal!
Good Evening Praveen!
Good Evening Lata!
```

### Использование `if` в `case`

Можно добавлять условия в шаблоны:

```python
def intr(details):
    match details:
        case [amt, duration] if amt < 10000:
            return amt * 10 * duration / 100
        case [amt, duration] if amt >= 10000:
            return amt * 15 * duration / 100

print("Interest = ", intr([5000, 5]))
print("Interest = ", intr([15000, 3]))
```

**Вывод:**

```
Interest = 2500.0
Interest = 6750.0
```

---

## Циклы в Python

Циклы позволяют выполнять инструкции или их группы многократно.

### Типы циклов

| № | Тип цикла | Описание |
|---|-----------|----------|
| 1 | `while`   | Повторяет инструкции, пока условие истинно. Проверяет условие перед выполнением тела цикла. |
| 2 | `for`     | Выполняет инструкции для каждого элемента последовательности. |
| 3 | Вложенные | Один или несколько циклов внутри другого цикла (`while`, `for`). |

### Управляющие инструкции циклов

| № | Инструкция | Описание |
|---|------------|----------|
| 1 | `break`    | Прерывает цикл и передает управление следующей инструкции. |
| 2 | `continue` | Пропускает оставшуюся часть тела цикла и переходит к следующей итерации. |
| 3 | `pass`     | Пустая инструкция, используется как заглушка. |

---

## Цикл `for`

Цикл `for` позволяет итерироваться по элементам последовательности (список, кортеж, строка и т.д.).

### Синтаксис `for`

```python
for переменная_итерации in последовательность:
    инструкция(и)
```

### Пример с использованием строки

```python
zen = '''
Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
'''
for char in zen:
    if char not in 'aeiou':
        print(char, end='')
```

**Вывод:**

```
Btfl s bttr thn gly.
Explct s bttr thn mplct.
Smpl s bttr thn cmplx.
Cmplx s bttr thn cmplctd.
```

### Пример с кортежем

```python
numbers = (34, 54, 67, 21, 78, 97, 45, 44, 80, 19)
total = 0
for num in numbers:
    total += num
print("Total =", total)
```

**Вывод:**

```
Total = 539
```

### Пример с использованием `range`

```python
for num in range(5):
    print(num, end=' ')
print()
for num in range(10, 20):
    print(num, end=' ')
print()
for num in range(1, 10, 2):
    print(num, end=' ')
```

**Вывод:**

```
0 1 2 3 4
10 11 12 13 14 15 16 17 18 19
1 3 5 7 9
```

### Пример с использованием словаря

```python
numbers = {10: "Ten", 20: "Twenty", 30: "Thirty", 40: "Forty"}
for x in numbers:
    print(x, ":", numbers[x])
```

**Вывод:**

```
10 : Ten
20 : Twenty
30 : Thirty
40 : Forty
```

### Использование `else` с циклом `for`

Блок `else` выполняется, когда цикл завершает итерации.

```python
for num in range(10, 20):
    for i in range(2, num):
        if num % i == 0:
            j = num / i
            print("%d equals %d * %d" % (num, i, j))
            break
    else:
        print(num, "is a prime number")
```

**Вывод:**

```
10 equals 2 * 5
11 is a prime number
12 equals 2 * 6
13 is a prime number
14 equals 2 * 7
15 equals 3 * 5
16 equals 2 * 8
17 is a prime number
18 equals 2 * 9
19 is a prime number
```

---

## Цикл `while`

Цикл `while` выполняет инструкции, пока заданное условие истинно.

### Синтаксис `while`

```python
while выражение:
    инструкция(и)
```

### Пример `while`

```python
count = 0
while count < 5:
    count += 1
    print("Iteration no. {}".format(count))

print("End of while loop")
```

**Вывод:**

```
Iteration no. 1
Iteration no. 2
Iteration no. 3
Iteration no. 4
Iteration no. 5
End of while loop
```

### Бесконечный цикл `while`

Если условие никогда не становится ложным, цикл становится бесконечным.

```python
var = 1
while var == 1:  # Бесконечный цикл
    num = int(input("Enter a number :"))
    print("You entered: ", num)
print("Good bye!")
```

**Вывод (прерывается с помощью Ctrl+C):**

```
Enter a number :20
You entered: 20
Enter a number :29
You entered: 29
...
```

### Использование `else` с `while`

Блок `else` выполняется, когда условие становится ложным.

```python
count = 0
while count < 5:
    count += 1
    print("Iteration no. {}".format(count))
else:
    print("While loop over. Now in else block")
print("End of while loop")
```

**Вывод:**

```
Iteration no. 1
Iteration no. 2
Iteration no. 3
Iteration no. 4
Iteration no. 5
While loop over. Now in else block
End of while loop
```

---

## Оператор `break`

Оператор `break` прерывает цикл и передает управление следующей инструкции.

### Пример с `for`

```python
for letter in 'Python':
    if letter == 'h':
        break
    print("Current Letter :", letter)
print("Good bye!")
```

**Вывод:**

```
Current Letter : P
Current Letter : y
Current Letter : t
Good bye!
```

### Пример с `while`

```python
var = 10
while var > 0:
    print('Current variable value :', var)
    var = var - 1
    if var == 5:
        break
print("Good bye!")
```

**Вывод:**

```
Current variable value : 10
Current variable value : 9
Current variable value : 8
Current variable value : 7
Current variable value : 6
Good bye!
```

---

## Оператор `continue`

Оператор `continue` пропускает оставшуюся часть тела цикла и переходит к следующей итерации.

### Пример с `for`

```python
for letter in 'Python':
    if letter == 'h':
        continue
    print('Current Letter :', letter)
print("Good bye!")
```

**Вывод:**

```
Current Letter : P
Current Letter : y
Current Letter : t
Current Letter : o
Current Letter : n
Good bye!
```

### Пример с `while`

```python
num = 60
print("Prime factors for: ", num)
d = 2
while num > 1:
    if num % d == 0:
        print(d)
        num = num / d
        continue
    d = d + 1
```

**Вывод:**

```
Prime factors for: 60
2
2
3
5
```

---

## Оператор `pass`

Оператор `pass` используется как заглушка, когда синтаксически требуется инструкция, но выполнять ничего не нужно.

### Пример `pass`

```python
for letter in 'Python':
    if letter == 'h':
        pass
        print('This is pass block')
    print('Current Letter :', letter)
print("Good bye!")
```

**Вывод:**

```
Current Letter : P
Current Letter : y
Current Letter : t
This is pass block
Current Letter : h
Current Letter : o
Current Letter : n
Good bye!
```

### Использование `pass` в бесконечном цикле

```python
while True:
    pass  # Прерывается с помощью Ctrl+C
```

---

## Функции в Python

Функция — это блок кода, который выполняет определенную задачу и может быть вызван из любой части программы. Функции позволяют организовать код, делая его более модульным и переиспользуемым.

### Синтаксис функции

```python
def имя_функции(параметры):
    """строка_документации"""
    инструкция(и)
    return [выражение]
```

- `def` — ключевое слово для определения функции.
- `имя_функции` — имя функции, которое должно соответствовать правилам именования переменных.
- `параметры` — необязательные входные данные (аргументы), которые функция принимает.
- `строка_документации` (опционально) — описание функции.
- `инструкция(и)` — блок кода, выполняющий задачу функции.
- `return` — возвращает значение из функции (если отсутствует, возвращается `None`).

### Пример функции

Пример функции для вычисления квадрата числа:

```python
def square(num):
    """Возвращает квадрат переданного числа"""
    return num * num

print(square(5))
print(square(9))
```

**Вывод:**

```
25
81
```

### Вызов функции

Функция вызывается по её имени с указанием аргументов в скобках:

```python
def say_hello(name):
    """Печатает приветствие для указанного имени"""
    print(f"Hello, {name}!")

say_hello("Alice")
say_hello("Bob")
```

**Вывод:**

```
Hello, Alice!
Hello, Bob!
```

### Функция без возвращаемого значения

Если функция не использует `return`, она возвращает `None`:

```python
def print_message():
    print("This is a message")

result = print_message()
print(result)
```

**Вывод:**

```
This is a message
None
```

### Параметры функции

Функции могут принимать параметры, которые используются внутри тела функции. Параметры могут быть:

- **Обязательные**: должны быть переданы при вызове.
- **Необязательные**: имеют значения по умолчанию (см. раздел ниже).

Пример функции с несколькими параметрами:

```python
def add(a, b):
    return a + b

print(add(3, 4))
print(add(10, 20))
```

**Вывод:**

```
7
30
```

---

## Параметры по умолчанию в функциях

Python позволяет задавать значения по умолчанию для параметров функции. Такие параметры становятся необязательными при вызове функции.

### Синтаксис параметров по умолчанию

```python
def имя_функции(параметр1, параметр2=значение_по_умолчанию):
    инструкция(и)
```

### Пример функции с параметрами по умолчанию

```python
def greet(name, message="Hello"):
    """Печатает приветствие с указанным сообщением"""
    print(f"{message}, {name}!")

greet("Alice")
greet("Bob", "Hi")
```

**Вывод:**

```
Hello, Alice!
Hi, Bob!
```

### Правила использования параметров по умолчанию

- Параметры с значениями по умолчанию должны следовать за обязательными параметрами в определении функции.
- Если параметр по умолчанию — изменяемый объект (например, список), его значение сохраняется между вызовами функции, что может привести к неожиданным результатам.

Пример с изменяемым объектом по умолчанию:

```python
def append_to_list(item, lst=[]):
    lst.append(item)
    return lst

print(append_to_list(1))
print(append_to_list(2))
```

**Вывод:**

```
[1]
[1, 2]
```

Чтобы избежать этой проблемы, используйте `None` как значение по умолчанию для изменяемых объектов:

```python
def append_to_list(item, lst=None):
    if lst is None:
        lst = []
    lst.append(item)
    return lst

print(append_to_list(1))
print(append_to_list(2))
```

**Вывод:**

```
[1]
[2]
```

### Пример с несколькими параметрами по умолчанию

```python
def calculate_total(price, tax=0.1, discount=0):
    """Вычисляет итоговую сумму с учетом налога и скидки"""
    total = price + (price * tax) - discount
    return total

print(calculate_total(100))
print(calculate_total(100, 0.2))
print(calculate_total(100, 0.2, 10))
```

**Вывод:**

```
110.0
120.0
110.0
```
