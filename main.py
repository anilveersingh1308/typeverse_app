import eel

eel.init('web')

@eel.expose
def print_word(word):
    print(f"Typed: {word}")

eel.start('index.html', size=(1000, 700))
