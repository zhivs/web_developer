class User:
    def __init__(self, username, password):
        self.username = username
        self.__password = password # Хардкор! Всегда храним хешированный пароль!
    
    def check_password(self, password_attempt):
        return self.__password == password_attempt

    def change_password(self, old_password, new_password):
        if self.check_password(old_password):
            self.__password = new_password
            print('Пароль успешно изменен!')
        else:
            print('Неверный старый пароль. Повторите попытку еще раз!')

    def _debug_show_password(self):
        '''
        Никогда так не делаем! Чувствительные данные не должны быть доступны пользователю!
        '''
        return self.__password

myUser = User('Ivan', 'my_secret_password')


#Попытка входа в систему
# if myUser.check_password('my_secrets_password'):
#     print('Доступ к чувствительным данным разрешен')
# else:
#     print('Неверный логин или пароль!')


print('Пароль до: {}'.format(myUser._debug_show_password()))

myUser.change_password('my_secret_password', '123')

print('Пароль после: {}'.format(myUser._debug_show_password()))
