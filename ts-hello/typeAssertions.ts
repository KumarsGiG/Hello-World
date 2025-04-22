let message;
message = "Hello, TypeScript";

let endsWithT = (<string>message).endsWith("T");
let anAlternativeWay = (message as string).endsWith("T");

