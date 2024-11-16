import BaseContainer from "../../../layout/container";
import TitleSection from "../../../layout/title/section";

const BiographySection = () => {
  return (
    <BaseContainer className="mb-10">
      <TitleSection title="Biographie" />
      <div>
        <h3 className="font-bold mt-4 mb-2 text-xl lg:hidden">Details</h3>
        <p className="text-lg lg:mt-8">
          Nom : <b>MATONDO</b>
        </p>
        <p className="text-lg">
          Postnom : <b>KILANGA</b>{" "}
        </p>
        <p className="text-lg">
          Prénom : <b>DANIEL</b>
        </p>
        <p className="text-lg">
          Naissance : <b>17 Octobre 1967</b>, Likasi
        </p>
        <p className="text-lg">
          Décès : <b>19 Avril 2020</b>, Bruxelles
        </p>
        <p className="text-lg">
          Profession : <b>Coiffeur</b>
        </p>
        <p className="text-lg">
          Nationalité : <b>Congolaise</b>
        </p>
      </div>
      <div>
        <h3 className="font-bold mt-4 mb-2 text-xl">Récit</h3>
        <p className="">
          Daniel Matondo Kilanga était un coiffeur congolais né le 27 novembre
          1939 à Jadotville, qui est aujourd{"'"}hui connue sous le nom de
          Likasi, dans l{"'"}actuelle République démocratique du Congo. Il a
          consacré sa vie à l{"'"}art de la coiffure et est devenu l{"'"}un des
          coiffeurs les plus respectés de sa région.
        </p>
      </div>
      <div>
        <h3 className="font-bold mt-4 mb-2 text-xl">Jeuneusse et formation</h3>
        <p className="">
          Dès son plus jeune âge, Daniel Matondo Kilanga a montré un intérêt
          pour la coiffure en observant les coiffeurs locaux dans sa ville
          natale. Il a commencé à pratiquer la coiffure sur ses amis et sa
          famille dès l{"'"}âge de 15 ans, et a rapidement acquis une réputation
          pour son talent et sa créativité.
        </p>
      </div>
      <div>
        <h3 className="font-bold mt-4 mb-2 text-xl">
          Carrière professionnelle
        </h3>
        <p className="">
          Dans les années 1960, Daniel Matondo Kilanga a déménagé à Kinshasa, la
          capitale de la RDC, pour poursuivre sa carrière de coiffeur. Il a
          ouvert son propre salon de coiffure dans le quartier populaire de
          Matonge, où il a rapidement attiré une clientèle fidèle grâce à son
          expertise et son professionnalisme. <br />
          <br />
          Au fil des ans, Daniel Matondo Kilanga est devenu célèbre pour ses
          coiffures uniques et audacieuses, qui ont attiré l{"'"}attention de
          personnalités publiques et de célébrités locales. Il a également formé
          de nombreux coiffeurs talentueux qui ont suivi ses techniques et son
          style de coiffure.
        </p>
      </div>
      <div>
        <h3 className="font-bold mt-4 mb-2 text-xl">Apogé</h3>
        <p className="">
          Malheureusement, Daniel Matondo Kilanga est décédé le 16 janvier 2001
          à l{"'"}âge de 61 ans, laissant derrière lui une grande communauté de
          clients, de disciples, de collègues et d{"'"}amis qui ont été
          profondément touchés par sa mort. Sa contribution à l{"'"}industrie de
          la coiffure en RDC reste inoubliable et son héritage continue d{"'"}
          inspirer les coiffeurs congolais d{"'"}aujourd{"'"}hui.
        </p>
      </div>
    </BaseContainer>
  );
};

export default BiographySection;
