from time import sleep

count = 0

while True:
  count += 1
  print(count, end='') # Remove python's default newline character
  sleep(1)