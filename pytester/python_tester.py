import requests


url_base = "localhost:8100"


# Expected result
expected_rsp = [{"success":"false"}]
rsp = requests.get('http://localhost:8100/check_submit_ticket?problem=55&equipmentSerial=54-100910')
rsp_json = rsp.json()

# Test for equiality;
if expected_rsp == rsp_json:
    print("SUCCESS: Test of incorrect serial number correct.")
else:
    print("ERROR: Incorrect serial number response.")

# Expected result
expected_rsp = [{"problem":"55","equipmentSerial":"54-10097410"}]
rsp = requests.get('http://localhost:8100/check_submit_ticket?problem=55&equipmentSerial=54-10097410')
rsp_json = rsp.json()

# Test for equiality;
if expected_rsp == rsp_json:
    print("SUCCESS: Test of incorrect serial number correct.")
else:
    print("ERROR: Incorrect serial number response.")