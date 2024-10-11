import styles from '@/styles/Home.module.scss';
import Image from 'next/image';
import NodeOverlay from '@/components/NodeOverlay';
import UseCase from '@/components/UseCase';
import FaqItem from '@/components/FaqItem';
import Hero from '@/components/Hero';
import AppLinks from '@/components/AppLinks';
import Link from 'next/link';
import Review from '@/components/Review';

export default function Home() {
  return (
    <>
      <main className={styles.main}>        
        <NodeOverlay />
        < Hero 
          title="FitConnect"
          subtitle="Votre application mobile de Coaching Fitness Personnalisé."
        />



         <div id={styles.section_reviews}>
          <h2 className="h2-lg my-lg text-center">Ce Que Disent Les Gens</h2>
          <div className="container">
            <div className="row">
              <Review 
                body="FitConnect a complètement transformé ma routine de fitness—les entraînements personnalisés me motivent vraiment !"
                name="AMINA"
              />
              <Review 
                body="Le coaching personnalisé est incroyable ! J'ai vu de vrais progrès en seulement quelques semaines."
                name="Intissar"
              />
              <Review 
                body="Les plans d'entraînement de FitConnect sont parfaitement adaptés à mes objectifs, je retrouve le plaisir de m'entraîner !"
                name="Anouar"
              />
              <Review 
                body="J'adore l'approche personnalisée ! C'est comme avoir un vrai coach à mes côtés 24/7."
                name="LINA"
              />
              <Review 
                body="FitConnect rend si facile de rester régulier avec des entraînements conçus juste pour moi !"
                name="MELISSA"
                className="d-none d-md-block"
              />
              <Review 
                body="Enfin une appli fitness qui comprend mes besoins et s’adapte à mes progrès !"
                name="MOHAMMED"
                className="d-none d-md-block"
              />
            </div>
          </div>
        </div>

        <div className='text-center py-5 mt-5 bg-graident'>

        </div>
 
        <div id={styles.section_features}>
          <h2 className="h2-lg my-lg text-center">Ce qui rend FitConnect unique</h2>

          <div className="container">
            <div className="row justify-content-md-center">
              <div className={`${styles.backsplash_container} col-md-6 col-lg-4 text-center`} >
                <div className={`${styles.backsplash} mx-auto`}></div>
                <Image 
                  src="images/phones/device_15_player_simple2.png" 
                  alt="Screenshot of FitConnect app ."
                  height={400}
                  width={200}
                  className={`${styles.backsplash_image} phone_shadow`}
                />
              </div>

              <div className='col-md-6 col-lg-4 offset-lg-1 my-auto text-center text-md-start'>
                <h3>Un planning Interactive</h3>
                  <p>
                    Sur FitConnect, vous pouvez consulter votre planning d'entraînement quotidien en un clin d'œil.
                  </p>
              </div>
            </div>
            
            <div className="row my-5 justify-content-md-center">
              <div className={`${styles.backsplash_container} col-md-6 col-lg-4 offset-lg-1 text-center`} >
                <div className={`${styles.backsplash} mx-auto`}></div>
                <Image 
                  src="images/phones/device_15_player_nested.png" 
                  alt="Screenshot of FitConnect app ."
                  height={400}
                  width={200}
                  className={`${styles.backsplash_image} phone_shadow`}
                />
              </div>
               <div className='col-md-6 col-lg-4 my-auto order-md-first text-center text-md-start'>
                <h3>Posts Communautaires</h3>
                <p>Vous pouvez facilement faire défiler et voir les posts des autres utilisateurs. Partagez et inspirez-vous de la communauté !</p>
              </div>
            </div>

            <div className="row justify-content-md-center">
              <div className={`${styles.backsplash_container} col-md-6 col-lg-4 text-center`} >
                <div className={`${styles.backsplash} mx-auto`}></div>
                <Image 
                  src="images/phones/device_15_channel_invite.png" 
                  alt="Screenshot of Roads app showing how to select friends to add to a channel."
                  height={400}
                  width={200}
                  className={`${styles.backsplash_image} phone_shadow`}
                />
              </div>

              <div className='col-md-6 col-lg-4 offset-lg-1 my-auto text-center text-md-start'>
                <h3>Contact Direct</h3>
                <p>Communiquez directement avec votre coach via l'application. Posez vos questions, recevez des conseils personnalisés et restez motivé tout au long de votre parcours fitness !</p>
              </div>
            </div>

          </div>
        </div>

        <div id={styles.section_use_cases}>
          <h2 className="h2-lg my-lg text-center">Moyens d'Utilisation FitConnect</h2>
          <div className="container">
            <div className="row">
              <UseCase 
                imagePath="images/icons/note.svg"
                title="Accédez à des coachs et nutritionnistes certifiés par FitConnect"
              />
              <UseCase 
                imagePath="images/icons/chat.svg"
                title="Rejoignez une communauté passionnée par le fitness et le bien-être."
              />
              <UseCase 
                imagePath="images/icons/book.svg"
                title="Trouvez des salles de sport et des coachs près de chez vous."
              />
              <UseCase 
                imagePath="images/icons/lecture.svg"
                title="Gérez facilement votre abonnement aux salles de sport à proximité."
              />
              <UseCase 
                imagePath="images/icons/team.svg"
                title="Profitez de FitConnect gratuitement sur votre mobile."
              />
              <UseCase 
                imagePath="images/icons/podcast.svg"
                title="Recevez des conseils adaptés pour atteindre vos objectifs fitness."
              />
            </div>
          </div>
        </div>

        <div id={styles.section_faq}>
          <h2 className="h2-lg my-lg text-center">FAQ&apos;s</h2>
          <div className="row justify-content-center">
            <div className="col-10 col-md-8 col-lg-6">
              
              <div className="accordion" id="faq_accordion">
                <FaqItem 
                  itemNum="one"
                  question="Qu'est-ce que FitConnect ?"
                  answer="FitConnect est une application mobile gratuite qui offre un coaching fitness personnalisé et un accès à une communauté dynamique."
                />
                <FaqItem 
                  itemNum="two"
                  question="Comment puis-je me connecter avec un coach ?"
                  answer="Vous pouvez envoyer un message directement à votre coach via l'application pour obtenir des conseils et du soutien."
                />
                <FaqItem 
                  itemNum="three"
                  question="Est-ce que FitConnect propose des plans d'entraînement personnalisés ?"
                  answer="Oui, FitConnect crée des plans d'entraînement adaptés à vos objectifs et à votre niveau de fitness."
                />
                <FaqItem 
                  itemNum="four"
                  question="Puis-je trouver des salles de sport à proximité ?"
                  answer="Oui, l'application vous permet de localiser des salles de sport et des coachs près de chez voush."
                />
                <FaqItem 
                  itemNum="five"
                  question="L'application est-elle gratuite ?"
                  answer="Oui, FitConnect est entièrement gratuite à télécharger et à utiliser, Mais le versions payant."
                />
                <FaqItem 
                  itemNum="seven"
                  question="FitConnect propose-t-il des conseils nutritionnels ?"
                  answer="Oui, vous pouvez accéder à des nutritionnistes certifiés pour des conseils personnalisés sur votre alimentation."
                />
                <FaqItem 
                  itemNum="eight"
                  question="Comment puis-je gérer mon abonnement aux salles de sport ?"
                  answer="FitConnect vous permet de centraliser et de gérer facilement votre abonnement aux salles de sport directement depuis l'application."
                />
              </div>
            </div>
          </div>
          
        </div>

        <div id={styles.section_wait_list}>
          <h2 className='h2-lg my-lg text-center text-primary'>Votre Coach, Votre Communauté, Votre Succès !</h2>
          < AppLinks />
        </div>
      </main>
    </>
  );
}
