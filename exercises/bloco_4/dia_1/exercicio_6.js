let peca = "CavaLO";

switch (peca.toLowerCase()){
  case 'peão':
    console.log("Apenas uma casa para frente");
    break;
    case 'rainha':
      console.log("pode andar em qualquer direção");
      break;
      case 'bispo':
      console.log("anda somente na diagonal");
      break;
      case 'cavalo':
        console.log("Pode andar em L");
        break;
        case 'torre':
          console.log("Anda na vertical/horizontal");
          break;
          default:
            console.log("essa peça nao existe no xadrez");
            break;
}


      
