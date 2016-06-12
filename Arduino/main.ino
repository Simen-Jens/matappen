void setup()
{
  UCSR0B = 0;	//Gjor det mulig aa bruke RX pin som IO
  Serial.begin(9600);
  pinMode(A0, INPUT_PULLUP);
  pinMode(A1, INPUT_PULLUP);
  pinMode(A2, INPUT_PULLUP);
  pinMode(A3, INPUT_PULLUP);
  pinMode(A4, INPUT_PULLUP);
  pinMode(A5, INPUT_PULLUP);
 
  pinMode(0, INPUT);
  pinMode(2, INPUT);
  pinMode(3, INPUT);
  pinMode(4, INPUT);
  pinMode(5, INPUT);
  pinMode(6, INPUT);
  pinMode(7, INPUT);
  pinMode(8, INPUT);
  pinMode(9, INPUT);
  pinMode(10, INPUT);
  pinMode(11, INPUT);
  pinMode(12, INPUT);
  pinMode(13, INPUT);
 
}
 
void loop()
{
  delay(1000);
  Serial.println(String("1510.owscout.com/?") + String("korn=") + String(digitalRead(0)) +       String("&gulrot=") + String(digitalRead(2))+ String("&lok=") + String(digitalRead(3)) + String("&brokkoli=") + String(digitalRead(4)) + String("&salat=") + String(digitalRead(5)) +
String("&avokado=") + String(digitalRead(6)) + String("&tomat=") + String(digitalRead(7)) + String("&sopp=") + String(digitalRead(8)) +String("&agurk=") + String(digitalRead(9)) + String("&paprika=") + String(digitalRead(10)) + String("&brod=") + String(digitalRead(11)) +
String("&potet=") + String(digitalRead(12)) + String("&melk=") + String(digitalRead(13)) + String("&kjott=") + String(conversion(0)) +String("&fugl=") + String(conversion(1)) + String("&fisk=") + String(conversion(2)) + String("&pasta=") + String(conversion(3)) +
String("&sitron=") + String(conversion(4)) + String("&ris=") + String(conversion(5)));
 
 
}
 
int conversion(int pin){
  if(analogRead(pin) > 1000){
    return 0;
  } else if(analogRead(pin) > 200){
    return 3;
  } else if(analogRead(pin) > 100){
    return 2;
  } else if(analogRead(pin) > 10){
    return 1;
  } else{
    return 0;
  }
}
