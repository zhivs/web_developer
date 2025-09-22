# main.py
def calculate_sum(a, b):
    result = a + b  # ← сюда поставим breakpoint
    return result

def main():
    x = 5
    y = 7
    total = calculate_sum(x, y)
    print(f"Сумма {x} и {y} = {total}")

if __name__ == "__main__":
    main()
