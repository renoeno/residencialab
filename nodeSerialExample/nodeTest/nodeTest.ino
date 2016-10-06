String inData = " o";

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(12, OUTPUT);
  digitalWrite(12, LOW);

}

void loop() {
  // put your main code here, to run repeatedly:
  //Serial.println(analogRead(0));
  if(Serial.available() > 0){
    char received = Serial.read();
        inData.concat(received);

        // Process message when new line character is received
        if (received == '\n') {
            // Message is ready in inDate
        }
    
  }
  Serial.println(inData);
  delay(100);

}
