import Mariner2Img from '../images/missions/mariner_2.jpg';
import OdisseyImg from '../images/missions/2001_mars_odissey.webp';
import Apollo11Img from '../images/missions/apollo11.jpg';
import CassiniImg from '../images/missions/cassini.jpg';
import EstacaoInter2Img from '../images/missions/estacao_inter.jpg';
import GalileoImg from '../images/missions/galileo.jpeg';
import GenesisImg from '../images/missions/Genesis.jpg';
import JamesWebbImg from '../images/missions/james_webb.jpeg';
import KeplerImg from '../images/missions/kepler.jpg';
import Mariner5Img from '../images/missions/Mariner_5.jpg';
import Mariner10Img from '../images/missions/mariner_10.jpg';
import MarsPolarLanderImg from '../images/missions/mars_polar_lander.jpeg';
import MessengerImg from '../images/missions/messenger.jpg';
import NozomiImg from '../images/missions/Nozomi.png';
import PathfinderLanderImg from '../images/missions/Pathfinder_Lander.webp';
import Phobos1Img from '../images/missions/phobos_1.jpg';
import Phobos2Img from '../images/missions/phobos_2.jpg';
import Venera4Img from '../images/missions/venera_4.jpeg';
import Venera16Img from '../images/missions/venera_16.jpeg';
import VoyagerImg from '../images/missions/voyager_1.png';

const MissionsModal = [
  {
    name: 'Mariner 2',
    image: Mariner2Img,
    // eslint-disable-next-line max-len
    text: 'A Mariner 2 (ou Mariner-Venus 1962), foi uma sonda espacial para Vênus, ela foi a primeira sonda espacial robótica a ter sucesso em atingir outro planeta.A primeira espaçonave do Programa Mariner da NASA bem-sucedida. Ela foi lançada de Cabo Canaveral em 27 de agosto de 1962, e passou a "apenas" 34 773 km de Vênus em 14 de dezembro de 1962.',
  },
  {
    name: 'Venera 4',
    image: Venera4Img,
    // eslint-disable-next-line max-len
    text: 'Venera 4 (em russo: Венера-4) foi uma sonda espacial soviética do Programa Vênera. A Venera 4 foi lançada de um Sputnik Tyazheliy (67-058B) em direção ao planeta Vénus com a missão de estudar a atmosfera local. Em 18 de Outubro de 1967, a nave espacial entrou na atmosfera venusiana e libertou dois termômetros, um barómetro, um rádio-altímetro, um indicador da densidade atmosférica, 11 analisadores de gases e dois rádio-transmissores que operavam na banda DM.',
  },
  {
    name: 'Mariner 5',
    image: Mariner5Img,
    // eslint-disable-next-line max-len
    text: 'A Mariner 5 (Mariner Venus 1967) foi uma nave espacial norte-americana que fez parte do Programa Mariner que transportou experimentos complementares para estudos da atmosfera de Vênus. A Mariner 5 foi originalmente construída como uma cópia de segurança para a Mariner 4, mas depois do sucesso daquela, foi modificada para a "missão Venus", removendo a câmera de televisão, invertendo e reduzindo os quatro painéis solares, e adicionando isolamento térmico extra.',
  },
  {
    name: 'Apollo 11',
    image: Apollo11Img,
    // eslint-disable-next-line max-len
    text: 'Apollo 11 foi um voo espacial tripulado norte-americano responsável pelo primeiro pouso na Lua. Os astronautas Neil Armstrong e Buzz Aldrin alunissaram o módulo lunar Eagle em 20 de julho de 1969 às 20h17min UTC. Armstrong tornou-se o primeiro humano a pisar na superfície lunar seis horas depois já no dia 21, seguido por Aldrin vinte minutos depois. Os dois passaram por volta de duas horas e quinze minutos fora da espaçonave e coletaram 21,5 quilogramas de material para trazer de volta à Terra. Michael Collins pilotou sozinho o módulo de comando e serviço Columbia na órbita da Lua enquanto seus companheiros estavam na superfície. Armstrong e Aldrin passaram um total de 21 horas e meia na Lua até reencontrarem-se com Collins.',
  },
  {
    name: 'Mariner 10',
    image: Mariner10Img,
    // eslint-disable-next-line max-len
    text: 'A Mariner 10 tinha como missão primária, o estudo dos planetas Mercúrio e Vénus, em relação às suas características físicas, atmosféricas e ambientais. Estava também previsto, o estudo do meio interplanetário e a avaliação de técnicas para o deslocamento nesse meio. Esta sonda, foi lançada em sua missão através de um foguete Atlas-Centauro a 3 de Novembro de 1973.',
  },
  {
    name: 'Voyager 1',
    image: VoyagerImg,
    // eslint-disable-next-line max-len
    text: 'Voyager 1 é uma sonda espacial norte-americana lançada ao espaço em 5 de setembro de 1977 para estudar Júpiter e Saturno prosseguindo e posteriormente para o espaço interestelar. Em 24 de janeiro de 2023, a sonda somou 45 anos, 4 meses e 19 dias em operação, recebendo comandos de rotina e transmitindo dados para a Terra. A sonda foi a primeira a entrar no espaço interestelar, informação oficialmente confirmada pela NASA no dia 12 de setembro de 2013.',
  },
  {
    name: 'Venera 16',
    image: Venera16Img,
    // eslint-disable-next-line max-len
    text: 'As naves Venera 15 e Venera 16 foram duas naves que mapearam o parte do hemisfério norte do planeta Vénus. A Venera 15 foi lançada no dia 2 de Junho de 1983 e a Venera 16 no dia 7 de Junho de 1983. As duas sondas pesavam (cada uma) 5,033 kg. A Venera 15 chegou a Vénus no dia 10 de Outubro de 1983 e a Venera 16 chegou no dia 14 de Outubro de 1983.[1][2]. As Veneras 15 e 16 foram as últimas sondas do Programa Vênera.',
  },
  {
    name: 'Phobos 1',
    image: Phobos1Img,
    // eslint-disable-next-line max-len
    text: 'O programa espacial Phobos consistia no lançamento de duas sondas não tripuladas, construídas pela antiga União Soviética, destinadas a estudar Marte e as suas duas luas, Fobos e Deimos. A sonda Phobos 1 foi lançada em 7 de Julho de 1988 e a sonda Phobos 2 foi lançada em 12 de Julho de 1988. Cada sonda foi levada ao espaço por meio de um foguete Proton-K. Ambas as sondas sofreram falhas críticas, que encerraram prematuramente suas missões de pesquisa espacial.',
  },
  {
    name: 'Phobos 2',
    image: Phobos2Img,
    // eslint-disable-next-line max-len
    text: 'O programa espacial Phobos consistia no lançamento de duas sondas não tripuladas, construídas pela antiga União Soviética, destinadas a estudar Marte e as suas duas luas, Fobos e Deimos. A sonda Phobos 1 foi lançada em 7 de Julho de 1988 e a sonda Phobos 2 foi lançada em 12 de Julho de 1988. Cada sonda foi levada ao espaço por meio de um foguete Proton-K. Ambas as sondas sofreram falhas críticas, que encerraram prematuramente suas missões de pesquisa espacial.',
  },
  {
    name: 'Galileo',
    image: GalileoImg,
    // eslint-disable-next-line max-len
    text: 'Galileo foi uma nave espacial norte-americana não tripulada, lançada pela NASA para estudar o planeta Júpiter, suas luas e outros corpos celestes do Sistema Solar. Batizada em homenagem ao astrônomo italiano Galileo Galilei, ela consistia de um orbitador e de um sonda atmosférica e foi lançada ao espaço em 18 de outubro de 1989, a partir da órbita terrestre, levada pelo ônibus espacial Atlantis na missão STS-34. Entrou em órbita de Júpiter em 7 de dezembro de 1995, após uma jornada de seis anos pelo espaço assistida pela gravidade de Vênus e da Terra, sendo a primeira sonda espacial a orbitar o planeta gigante.',
  },
  {
    name: 'Mars Pathfinder',
    image: PathfinderLanderImg,
    // eslint-disable-next-line max-len
    text: 'Mars Pathfinder (MESUR Pathfinder)[1][2] é uma sonda veicular robótica construída pela NASA e que pousou com uma base fixa levando um rover de exploração para o planeta Marte, em 1997. Consistia no veículo de pouso renomeado para Carl Sagan Memorial Station e um robô motorizado de 10,6kg, nomeado Sojourner, que se tornou o primeiro rover operado fora do sistema Terra-Lua.',
  },
  {
    name: 'Cassini-Huygens',
    image: CassiniImg,
    // eslint-disable-next-line max-len
    text: 'Cassini-Huygens foi uma missão espacial não-tripulada enviada em missão ao planeta Saturno e seu sistema de luas. Um projeto conjunto da NASA, ESA (Agência Espacial Europeia) e ASI (Agência Espacial Italiana), ela consistia de dois elementos principais, o orbitador Cassini[1] e a sonda Huygens. Lançada ao espaço em 15 de outubro de 1997, ela entrou em órbita de Saturno em 1 de julho de 2004 e continuou em operação até 15 de setembro de 2017, estudando o planeta, seus satélites naturais, a heliosfera e testando a Teoria da Relatividade. Entre as muitas descobertas da missão estão ambientes potencialmente habitáveis nas luas de Saturno, incluindo um oceano de subsuperfície de água em Enceladus.',
  },
  {
    name: 'Nozomi (Planeta B)',
    image: NozomiImg,
    // eslint-disable-next-line max-len
    text: 'Nozomi (のぞみ nozomi?) é uma nave espacial lançada e administrada pela Japan Aerospace Exploration Agency – JAXA, com a finalidade de estudar o planeta Marte, em particular a sua alta atmosfera.Para o programa espacial japonês a sonda era inicialmente chamada de Planeta-B. Ela foi lançada em 3 de Julho de 1998 horário JPN ou em 4 de Julho de 1998 horário EST. Ela iria orbitar em torno de Marte a uma altitude média de 890 km.',
  },
  {
    name: 'Estação Internacional Espacial',
    image: EstacaoInter2Img,
    // eslint-disable-next-line max-len
    text: 'Estação Espacial Internacional (EEI) (em inglês: International Space Station, ISS, em russo: Междунаро́дная косми́ческая ста́нция, МКС) é um laboratório espacial completamente concluído, cuja montagem em órbita começou em 1998 e terminou oficialmente em 8 de julho de 2011 na missão STS-135, com o ônibus espacial Atlantis.[1] A estação encontra-se em uma órbita baixa de 408 x 418 km, que possibilita ser vista da Terra a olho nu,[2] e viaja a uma velocidade média de 27 700 km/h, completando 15,70 órbitas por dia.',
  },
  {
    name: 'Mars Polar Lander',
    image: MarsPolarLanderImg,
    // eslint-disable-next-line max-len
    text: 'O Mars Polar Lander ou o Pousador Polar de Marte[1] é uma sonda espacial norte-americana, gerenciada pelo Laboratório de propulsão a jacto da NASA. Foi lançado pelo foguete Delta II 7425 em 3 de janeiro de 1999 e chegou a Marte em 3 de dezembro de 1999, após uma viagem de nove meses. Era a primeira tentativa de pouso em Marte desde a missão Mars Pathfinder de 1997.Concepção artística do Mars Polar Lander A sonda na realidade transportava duas sondas distintas ou melhor dizendo, três sondas. A sonda principal, Mars Polar Lander e as duas micro-sondas do experimento Deep Space 2.',
  },
  {
    name: '2001 Mars Odyssey',
    image: OdisseyImg,
    // eslint-disable-next-line max-len
    text: '2001 Mars Odyssey é uma sonda espacial americana destinada a orbitar e estudar o planeta Marte. Lançada em 7 de abril de 2001 a bordo de um Delta II a partir da Estação da Força Aérea de Cabo Canaveral, a sonda alcançou a órbita de Marte em 24 de outubro do mesmo ano.[1][2] O objetivo principal da sonda é utilizar espectrômetros e imagens térmicas para detectar evidências de água e gelo na superfície de Marte, bem como estudar a geologia do planeta e o seu ambiente de radiação.',
  },
  {
    name: 'Genesis',
    image: GenesisImg,
    // eslint-disable-next-line max-len
    text: 'A sonda espacial Genesis é uma missão não-tripulada da NASA, gerenciada pelo Jet Propulsion Laboratory - JPL, consistindo na primeira tentativa de se coletar amostras de vento solar e foi a primeira sonda a retornar amostras do espaço, além da órbita da Lua. A sonda foi lançada em 8 de Agosto de 2001, e aterrissando violentamente em 8 de Setembro de 2004, devido a uma falha na abertura de seu pára-quedas. A queda acabou contaminando muitas de suas amostras, mas processos laboratoriais subsequentes foram capazes de isolar as amostras e foi anunciado em abril de 2005, que alguns dos objetivos científicos da missão foram atingidos.',
  },
  {
    name: 'MESSENGER',
    image: MessengerImg,
    // eslint-disable-next-line max-len
    text: 'MESSENGER foi a missão da sonda espacial não-tripulada da NASA, gerenciada pelo Jet Propulsion Laboratory - JPL, destinada a estudar as características e o ambiente do planeta Mercúrio. Especificamente, os objetivos científicos da missão foram os de caracterizar a composição química da superfície, a sua história geológica, a natureza do seu campo magnético, o tamanho e o estado do núcleo planetário, pesquisar seus polos e a natureza da sua exosfera e da sua magnetosfera, numa missão orbital de inicialmente um ano terrestre de duração que transformou-se em quatro anos.',
  },
  {
    name: 'Telescópio Espacial Kepler',
    image: KeplerImg,
    // eslint-disable-next-line max-len
    text: 'O Telescópio Espacial Kepler consistiu em um observatório espacial projetado pela NASA que procurou por planetas com características habitáveis fora do Sistema Solar por nove anos e meio. Para esta finalidade, a sonda observou as 100 000 estrelas mais brilhantes do céu, a fim de detectar alguma ocultação periódica de uma estrela por um de seus planetas. Ao todo, Kepler foi responsável pela descoberta de 2 720 exoplanetas. Em 30 de outubro de 2018, a NASA anunciou a aposentadoria da sonda devido ao esgotamento do seu sistema de controle de reação, e a missão foi considerada encerrada.',
  },
  {
    name: 'Telescópio Espacial James Webb',
    image: JamesWebbImg,
    // eslint-disable-next-line max-len
    text: 'O Telescópio Espacial James Webb (em inglês James Webb Space Telescope, JWST) é um telescópio espacial desenvolvido em conjunto pela NASA, a Agência Espacial Europeia (ESA) e a Agência Espacial Canadense (CSA),[4] com a finalidade de colocar no espaço um observatório para captar a radiação infravermelha. O telescópio pode observar a formação das primeiras galáxias e estrelas, estudar a evolução das galáxias e ver os processos de formação das estrelas e dos planetas.[5] O telescópio foi inicialmente denominado de Next Generation Space Telescope ou NGST. O termo "Next Generation" refere-se ao fato que se pretende que ele venha a substituir o Telescópio espacial Hubble, pois após o seu lançamento, novas tecnologias foram desenvolvidas, permitindo construir o novo telescópio sob uma nova concepção.[6] Posteriormente o telescópio foi renomeado em 2002, em honra a um antigo administrador da agência espacial americana, James Edwin Webb, que liderou o programa Apollo, além de uma série de outras importantes missões espaciais.',
  },
];

export default MissionsModal;
