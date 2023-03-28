def toJSON(arr):
  json_arr = []
  for i in arr:
    json_arr.append(i.__dict__)
    
  return json_arr