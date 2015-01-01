greet = (name, drunk) ->
  throw new Error("name should be string")  if typeof name isnt "string"
  if drunk
    "hello " + name + " , you look sexy"
  else
    "hello " + name

module.exports = greet