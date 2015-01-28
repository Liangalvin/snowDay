#prime numbers

primes = []

i = 2

while i < 100 do

  if i == 2 || i == 3 || i == 5 || i == 7

  primes.push(i)

  elsif i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % 7 != 0

  primes.push(i)

  end

  i+=1

end

puts primes
puts "there are #{primes.length} prime numbers"
