import pyautogui
import pyperclip
import time
pyautogui.PAUSE = 1
pyautogui.doubleClick(x=704, y=63) #click numero transação
pyautogui.hotkey("ctrl", "c")
pyautogui.hotkey("ctrl", "t")
pyautogui.click(x=1231, y=60) #click abrir extensão
pyautogui.press('tab')
pyautogui.hotkey("ctrl", "v")
pyautogui.press('enter')
time.sleep(2)
pyautogui.press('tab')
pyautogui.press('tab')
time.sleep(2)
pyautogui.press('space')

#latam
time.sleep(2)
pyautogui.press('tab')
pyautogui.press('tab')
pyautogui.press('space')
time.sleep(2)
pyautogui        .click(x=1231, y=60) #click ok da extensao
time.sleep(2)
pyautogui.click(x=846, y=445) #click fechar extensão
pyautogui.press('space')  #dar ok no aviso popup
time.sleep(2)
pyautogui.scroll(-1000)
pyautogui.click(x=670, y=538) #click botão login



