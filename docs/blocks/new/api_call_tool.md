
# api_call_tool
Tool used to call HTTP APIs.
## Inputs
### args (text)
## Fields

### Name (string)
The name of the block. Can only contain letters, numbers, and underscores. Cannot include spaces.
        

### Method (string)
The HTTP method to use for the request.
        

### URL (string)
The URL to send the request to. If you want to use a variable, use `{{variable_name}}`. Notice the double curly braces!
        

### Description (string)
The description of the API call.
        

### Parameters (string)
Valid JSONSchema definition of the parameters passed to api call. Always pass a JSON object schema. ie. `{"type": "object", "properties": {"name": {"type": "string"}}, "required": ["name"]}`.
        

### Headers (string)
Valid JSON object of the headers to be sent with the request. ie. `{"Content-Type": "application/json"}`.
        
opts.authorize
    