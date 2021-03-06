function  WWHBookData_AddTOCEntries(P)
{
var A=P.fN("Chapter 1 Guide Introduction","");
var B=A.fN("1.1 About this Manual","0");
B=A.fN("1.2 Audience","1");
B=A.fN("1.3 Programming Language","2");
B=A.fN("1.4 Acronyms and Abbreviations","3");
B=A.fN("1.5 References","4");
B=A.fN("1.6 Documentation Feedback","5");
B=A.fN("1.7 Document Conventions","6");
A=P.fN("Chapter 2 Product Overview","");
B=A.fN("2.1 EMA Product Description","7");
B=A.fN("2.2 Product Documentation and Learning EMA","8");
var C=B.fN("2.2.1 Consumer Examples","9");
C=B.fN("2.2.2 Provider Examples","10");
B=A.fN("2.3 Supported Features","11");
B=A.fN("2.4 Product Architecture","12");
C=B.fN("2.4.1 EMA Consumer Architecture","12#1028428");
C=B.fN("2.4.2 EMA Provider Architecture","13");
C=B.fN("2.4.3 EMA Codec Architecture","14");
B=A.fN("2.5 Tunnel Streams","15");
A=P.fN("Chapter 3 OMM Containers and Messages","");
B=A.fN("3.1 Overview","16");
B=A.fN("3.2 Classes","17");
C=B.fN("3.2.1 DataType Class","17#1019110");
C=B.fN("3.2.2 DataCode Class","18");
C=B.fN("3.2.3 Data Class","19");
C=B.fN("3.2.4 Msg Class","20");
C=B.fN("3.2.5 OmmError Class","21");
C=B.fN("3.2.6 TunnelStreamRequest and ClassOfService Classes","22");
B=A.fN("3.3 Working with OMM Containers","23");
C=B.fN("3.3.1 Example: Populating a FieldList Class","24");
C=B.fN("3.3.2 Example: Populating a Map Class Relying on the FieldList Memory Buffer","25");
C=B.fN("3.3.3 Example: Populating a Map Class Relying on the Map Class Buffer","26");
C=B.fN("3.3.4 Example: Extracting Information from a FieldList Class","27");
C=B.fN("3.3.5 Example: Application Filtering on the FieldList Class","28");
C=B.fN("3.3.6 Example: Extracting FieldList information using a Downcast Operation","29");
B=A.fN("3.4 Working with OMM Messages","30");
C=B.fN("3.4.1 Example: Populating the GenericMsg with an ElementList Payload","31");
C=B.fN("3.4.2 Example: Extracting Information from the GenericMsg Class","32");
C=B.fN("3.4.3 Example: Working with the TunnelStreamRequest Class","33");
A=P.fN("Chapter 4 Consumer Classes","");
B=A.fN("4.1 OmmConsumer Class","34");
C=B.fN("4.1.1 Connecting to a Server and Opening Items","35");
C=B.fN("4.1.2 Opening Items Immediately After OmmConsumer Object Instantiation","36");
C=B.fN("4.1.3 Destroying the OmmConsumer Object","37");
C=B.fN("4.1.4 Example: Working with the OmmConsumer Class","38");
C=B.fN("4.1.5 Working with Items","39");
C=B.fN("4.1.6 Example: Working with Items","40");
B=A.fN("4.2 OmmConsumerClient Class","41");
C=B.fN("4.2.1 OmmConsumerClient Description","41#1020898");
C=B.fN("4.2.2 Example: OmmConsumerClient","42");
B=A.fN("4.3 OmmConsumerConfig Class","43");
A=P.fN("Chapter 5 Provider Classes","");
B=A.fN("5.1 OmmProvider Class","44");
C=B.fN("5.1.1 Connecting to ADH and Submitting Items","45");
C=B.fN("5.1.2 Non-Interactive Providers: Post OmmProvider Object Instantiation","46");
C=B.fN("5.1.3 Interactive Providers: Post OmmProvider Object Instantiation","47");
C=B.fN("5.1.4 Destroying the OmmProvider Object","48");
C=B.fN("5.1.5 Non-Interactive Example: Working with the OmmProvider Class","49");
C=B.fN("5.1.6 Interactive Provider Example: Working with the OmmProvider Class","50");
C=B.fN("5.1.7 Working with Items","51");
B=A.fN("5.2 OmmProviderClient Class","52");
C=B.fN("5.2.1 OmmProviderClient Description","52#1025276");
C=B.fN("5.2.2 Non-Interactive Example: OmmProviderClient","53");
C=B.fN("5.2.3 Interactive Example: OmmProviderClient","54");
B=A.fN("5.3 OmmNiProviderConfig Class","55");
B=A.fN("5.4 OMMIProviderConfig","56");
A=P.fN("Chapter 6 Troubleshooting and Debugging","");
B=A.fN("6.1 EMA Logger Usage","57");
B=A.fN("6.2 Omm Error Client Classes","58");
C=B.fN("6.2.1 Error Client Description","58#1019163");
C=B.fN("6.2.2 Example: Error Client","59");
B=A.fN("6.3 OmmException Class","60");
}
