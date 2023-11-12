import random

def generate_password(length=16):
    """Generate a random password"""
    lower = "abcdefghijklmnopqrstuvwxyz"
    upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    numbers = "0123456789"
    symbols = "!@#$%^&*()_+=-`~[]{}|;':,./<>?\\"
    all_chars = lower + upper + numbers + symbols
    length = length
    password = "".join(random.sample(all_chars,length))
    return password
