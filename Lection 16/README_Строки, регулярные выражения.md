# Характеристика языка Python: Строки и регулярные выражения

## Строки в Python

Строки в Python — это неизменяемые последовательности символов Unicode, используемые для представления текстовой информации. Строки могут быть заключены в одинарные (`'`), двойные (`"`) или тройные (`'''` или `"""`) кавычки. Тройные кавычки обычно используются для многострочных строк или строк документации.

### Создание строк

Строки создаются с помощью кавычек:

```python
single_quote_str = 'Hello, Python!'
double_quote_str = "Hello, Python!"
multiline_str = '''This is a
multiline
string.'''
```

### Основные операции со строками

1. **Конкатенация** — объединение строк с помощью оператора `+`:

```python
str1 = "Hello"
str2 = "World"
result = str1 + ", " + str2 + "!"
print(result)
```

**Вывод:**

```
Hello, World!
```

2. **Повторение** — повторение строки с помощью оператора `*`:

```python
str1 = "Echo "
result = str1 * 3
print(result)
```

**Вывод:**

```
Echo Echo Echo 
```

3. **Индексация и срезы** — доступ к символам строки по индексу или извлечение подстроки:

```python
text = "Python"
print(text[0])      # Первый символ
print(text[-1])     # Последний символ
print(text[1:4])    # Срез от 1 до 3
print(text[:3])     # Срез от начала до 2
print(text[3:])     # Срез от 3 до конца
```

**Вывод:**

```
P
n
yth
Pyt
hon
```

4. **Длина строки** — определение количества символов с помощью функции `len()`:

```python
text = "Python"
print(len(text))
```

**Вывод:**

```
6
```

### Методы строк

Python предоставляет множество встроенных методов для работы со строками. Вот несколько часто используемых:

- `str.lower()` — преобразует строку в нижний регистр.
- `str.upper()` — преобразует строку в верхний регистр.
- `str.strip()` — удаляет пробелы и специальные символы с начала и конца строки.
- `str.replace(old, new)` — заменяет все вхождения подстроки `old` на `new`.
- `str.split(sep)` — разбивает строку на список по разделителю `sep`.
- `str.join(iterable)` — объединяет элементы итерируемого объекта в строку с разделителем `str`.
- `str.find(sub)` — возвращает индекс первого вхождения подстроки `sub` или `-1`, если подстрока не найдена.
- `str.startswith(prefix)` — проверяет, начинается ли строка с указанного префикса.
- `str.endswith(suffix)` — проверяет, заканчивается ли строка указанным суффиксом.

### Пример методов строк

```python
text = "  Hello, Python!  "
print(text.lower())           # Преобразование в нижний регистр
print(text.upper())           # Преобразование в верхний регистр
print(text.strip())           # Удаление пробелов
print(text.replace("Python", "World"))  # Замена подстроки
print(text.split(","))        # Разбиение строки
print("-".join(["a", "b", "c"]))  # Объединение списка
print(text.find("Python"))    # Поиск подстроки
print(text.startswith("  H")) # Проверка начала строки
print(text.endswith("!  "))   # Проверка конца строки
```

**Вывод:**

```
  hello, python!  
  HELLO, PYTHON!  
Hello, Python!
  Hello, World!  
['  Hello', ' Python!  ']
a-b-c
9
True
True
```

### Форматирование строк

Python предлагает несколько способов форматирования строк:

1. **Оператор `%`**:

```python
name = "Alice"
age = 25
print("My name is %s and I am %d years old." % (name, age))
```

**Вывод:**

```
My name is Alice and I am 25 years old.
```

2. **Метод `str.format()`**:

```python
print("My name is {} and I am {} years old.".format(name, age))
```

**Вывод:**

```
My name is Alice and I am 25 years old.
```

3. **f-строки (f-strings)** (Python 3.6+):

```python
print(f"My name is {name} and I am {age} years old.")
```

**Вывод:**

```
My name is Alice and I am 25 years old.
```

### Экранирование символов

Специальные символы в строках экранируются с помощью обратной косой черты `\`:

```python
text = "This is a \"quoted\" text.\nNew line."
print(text)
```

**Вывод:**

```
This is a "quoted" text.
New line.
```

### Неизменяемость строк

Строки в Python неизменяемы, то есть их нельзя изменить после создания. Для модификации создается новая строка:

```python
text = "Python"
# text[0] = "J"  # Ошибка: строки неизменяемы
new_text = "J" + text[1:]
print(new_text)
```

**Вывод:**

```
Jython
```

---

## Регулярные выражения в Python

Регулярные выражения (regex) — это мощный инструмент для обработки текстов, позволяющий выполнять поиск, замену и проверку строк на основе шаблонов. В Python для работы с регулярными выражениями используется модуль `re`.

### Основы регулярных выражений

Регулярное выражение — это строка, описывающая шаблон для поиска или соответствия текста. Например, шаблон `\d+` соответствует одной или более цифрам.

Для работы с регулярными выражениями нужно импортировать модуль `re`:

```python
import re
```

### Основные функции модуля `re`

1. `re.search(pattern, string)` — ищет первое вхождение шаблона в строке.
2. `re.match(pattern, string)` — проверяет, начинается ли строка с шаблона.
3. `re.findall(pattern, string)` — возвращает все непересекающиеся вхождения шаблона.
4. `re.sub(pattern, repl, string)` — заменяет все вхождения шаблона на строку `repl`.
5. `re.split(pattern, string)` — разбивает строку по шаблону.

### Основные метасимволы

| Метасимвол | Описание |
|------------|----------|
| `.`        | Любой символ, кроме новой строки |
| `\d`       | Цифра (0-9) |
| `\D`       | Не цифра |
| `\w`       | Буква, цифра или подчеркивание |
| `\W`       | Не буква, не цифра, не подчеркивание |
| `\s`       | Пробельный символ (пробел, табуляция, новая строка) |
| `\S`       | Не пробельный символ |
| `^`        | Начало строки |
| `$`        | Конец строки |
| `*`        | 0 или более повторений |
| `+`        | 1 или более повторений |
| `?`        | 0 или 1 повторение |
| `{n}`      | Ровно n повторений |
| `{n,m}`    | От n до m повторений |
| `[]`       | Набор символов (например, `[a-z]`) |
| `|`        | Логическое ИЛИ |
| `()`       | Группировка |

### Пример использования регулярных выражений

1. **Поиск цифр в строке**:

```python
import re

text = "The price is $100 and the discount is $20."
numbers = re.findall(r'\d+', text)
print(numbers)
```

**Вывод:**

```
['100', '20']
```

2. **Проверка, является ли строка email-адресом**:

```python
email = "user@example.com"
if re.match(r'^[\w\.-]+@[\w\.-]+\.\w+$', email):
    print("Valid email")
else:
    print("Invalid email")
```

**Вывод:**

```
Valid email
```

3. **Замена всех цифр на символ `#`**:

```python
text = "My number is 12345."
result = re.sub(r'\d', '#', text)
print(result)
```

**Вывод:**

```
My number is #####.
```

4. **Разбиение строки по пробелам**:

```python
text = "one two  three   four"
words = re.split(r'\s+', text)
print(words)
```

**Вывод:**

```
['one', 'two', 'three', 'four']
```

5. **Извлечение групп**:

```python
text = "Contact: user@example.com"
match = re.search(r'([\w\.-]+)@([\w\.-]+)', text)
if match:
    print("Username:", match.group(1))
    print("Domain:", match.group(2))
```

**Вывод:**

```
Username: user
Domain: example.com
```

### Флаги модуля `re`

Модуль `re` поддерживает флаги для изменения поведения регулярных выражений:

- `re.IGNORECASE` (`re.I`) — игнорировать регистр.
- `re.MULTILINE` (`re.M`) — многострочный режим, где `^` и `$` соответствуют началу и концу каждой строки.
- `re.DOTALL` (`re.S`) — точка `.` соответствует любому символу, включая новую строку.

Пример с использованием флага `re.IGNORECASE`:

```python
text = "Python is GREAT"
if re.search(r'great', text, re.IGNORECASE):
    print("Found 'great' (case-insensitive)")
```

**Вывод:**

```
Found 'great' (case-insensitive)
```

### Компиляция регулярных выражений

Для повторного использования одного и того же шаблона можно скомпилировать его с помощью `re.compile()`:

```python
pattern = re.compile(r'\d+')
text = "Numbers: 123, 456, 789"
numbers = pattern.findall(text)
print(numbers)
```

**Вывод:**

```
['123', '456', '789']
```

### Обработка ошибок

Регулярные выражения могут быть сложными, поэтому важно обрабатывать возможные ошибки:

```python
try:
    re.search(r'[a-z+', "test")  # Неправильный шаблон
except re.error as e:
    print(f"Regex error: {e}")
```

**Вывод:**

```
Regex error: missing ], unterminated bracket expression
```

---

<xaiArtifact artifact_id="bda45ad9-5a79-4fd3-a348-1a0b9773bcb9" artifact_version_id="2a39d6cb-ac7b-420d-a486-c9e8f9a8aca1" title="python_strings_regex.md" contentType="text/markdown">

# Учебник по Python: Строки и регулярные выражения

## Строки в Python

Строки в Python — это неизменяемые последовательности символов Unicode, используемые для представления текстовой информации. Строки могут быть заключены в одинарные (`'`), двойные (`"`) или тройные (`'''` или `"""`) кавычки. Тройные кавычки обычно используются для многострочных строк или строк документации.

### Создание строк

```python
single_quote_str = 'Hello, Python!'
double_quote_str = "Hello, Python!"
multiline_str = '''This is a
multiline
string.'''
```

### Основные операции со строками

1. **Конкатенация** — объединение строк с помощью оператора `+`:

```python
str1 = "Hello"
str2 = "World"
result = str1 + ", " + str2 + "!"
print(result)  # Вывод: Hello, World!
```

2. **Повторение** — повторение строки с помощью оператора `*`:

```python
str1 = "Echo "
result = str1 * 3
print(result)  # Вывод: Echo Echo Echo 
```

3. **Индексация и срезы** — доступ к символам строки по индексу или извлечение подстроки:

```python
text = "Python"
print(text[0])      # P
print(text[-1])     # n
print(text[1:4])    # yth
print(text[:3])     # Pyt
print(text[3:])     # hon
```

4. **Длина строки** — определение количества символов с помощью функции `len()`:

```python
text = "Python"
print(len(text))  # 6
```

### Методы строк

- `str.lower()` — преобразует строку в нижний регистр.
- `str.upper()` — преобразует строку в верхний регистр.
- `str.strip()` — удаляет пробелы и специальные символы с начала и конца строки.
- `str.replace(old, new)` — заменяет все вхождения подстроки `old` на `new`.
- `str.split(sep)` — разбивает строку на список по разделителю `sep`.
- `str.join(iterable)` — объединяет элементы итерируемого объекта в строку с разделителем `str`.
- `str.find(sub)` — возвращает индекс первого вхождения подстроки `sub` или `-1`.
- `str.startswith(prefix)` — проверяет, начинается ли строка с указанного префикса.
- `str.endswith(suffix)` — проверяет, заканчивается ли строка указанным суффиксом.

### Пример методов строк

```python
text = "  Hello, Python!  "
print(text.lower())           #   hello, python!  
print(text.upper())           #   HELLO, PYTHON!  
print(text.strip())           # Hello, Python!
print(text.replace("Python", "World"))  #   Hello, World!  
print(text.split(","))        # ['  Hello', ' Python!  ']
print("-".join(["a", "b", "c"]))  # a-b-c
print(text.find("Python"))    # 9
print(text.startswith("  H")) # True
print(text.endswith("!  "))   # True
```

### Форматирование строк

1. **Оператор `%`**:

```python
name = "Alice"
age = 25
print("My name is %s and I am %d years old." % (name, age))
# Вывод: My name is Alice and I am 25 years old.
```

2. **Метод `str.format()`**:

```python
print("My name is {} and I am {} years old.".format(name, age))
# Вывод: My name is Alice and I am 25 years old.
```

3. **f-строки**:

```python
print(f"My name is {name} and I am {age} years old.")
# Вывод: My name is Alice and I am 25 years old.
```

### Экранирование символов

```python
text = "This is a \"quoted\" text.\nNew line."
print(text)
# Вывод:
# This is a "quoted" text.
# New line.
```

### Неизменяемость строк

```python
text = "Python"
new_text = "J" + text[1:]
print(new_text)  # Jython
```

## Регулярные выражения в Python

Регулярные выражения (regex) — инструмент для обработки текстов с помощью шаблонов. В Python используется модуль `re`.

### Основные функции модуля `re`

```python
import re
```

- `re.search(pattern, string)` — ищет первое вхождение шаблона.
- `re.match(pattern, string)` — проверяет начало строки.
- `re.findall(pattern, string)` — возвращает все вхождения шаблона.
- `re.sub(pattern, repl, string)` — заменяет вхождения шаблона.
- `re.split(pattern, string)` — разбивает строку по шаблону.

### Основные метасимволы

| Метасимвол | Описание |
|------------|----------|
| `.`        | Любой символ, кроме новой строки |
| `\d`       | Цифра (0-9) |
| `\D`       | Не цифра |
| `\w`       | Буква, цифра или подчеркивание |
| `\W`       | Не буква, не цифра, не подчеркивание |
| `\s`       | Пробельный символ |
| `\S`       | Не пробельный символ |
| `^`        | Начало строки |
| `$`        | Конец строки |
| `*`        | 0 или более повторений |
| `+`        | 1 или более повторений |
| `?`        | 0 или 1 повторение |
| `{n}`      | Ровно n повторений |
| `{n,m}`    | От n до m повторений |
| `[]`       | Набор символов |
| `|`        | Логическое ИЛИ |
| `()`       | Группировка |

### Пример использования регулярных выражений

1. **Поиск цифр**:

```python
text = "The price is $100 and the discount is $20."
numbers = re.findall(r'\d+', text)
print(numbers)  # ['100', '20']
```

2. **Проверка email**:

```python
email = "user@example.com"
if re.match(r'^[\w\.-]+@[\w\.-]+\.\w+$', email):
    print("Valid email")
else:
    print("Invalid email")
# Вывод: Valid email
```

3. **Замена цифр**:

```python
text = "My number is 12345."
result = re.sub(r'\d', '#', text)
print(result)  # My number is #####.
```

4. **Разбиение строки**:

```python
text = "one two  three   four"
words = re.split(r'\s+', text)
print(words)  # ['one', 'two', 'three', 'four']
```

5. **Извлечение групп**:

```python
text = "Contact: user@example.com"
match = re.search(r'([\w\.-]+)@([\w\.-]+)', text)
if match:
    print("Username:", match.group(1))
    print("Domain:", match.group(2))
# Вывод:
# Username: user
# Domain: example.com
```

### Флаги модуля `re`

- `re.IGNORECASE` — игнорировать регистр.
- `re.MULTILINE` — многострочный режим.
- `re.DOTALL` — точка соответствует любому символу.

```python
text = "Python is GREAT"
if re.search(r'great', text, re.IGNORECASE):
    print("Found 'great' (case-insensitive)")
# Вывод: Found 'great' (case-insensitive)
```

### Компиляция регулярных выражений

```python
pattern = re.compile(r'\d+')
text = "Numbers: 123, 456, 789"
numbers = pattern.findall(text)
print(numbers)  # ['123', '456', '789']
```

</xaiArtifact>