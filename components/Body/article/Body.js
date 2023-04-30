import React from "react";
import styles from "@/styles/Body/article/Body.module.scss";

import createAuthorsList from "@/components/Functions/createAuthorsList";
import dehtml from "@/components/Functions/dehtml";

export default function Body({article, section}) {
    const headline = dehtml(article.title["rendered"]);
    const authorsList = createAuthorsList(article.authors, "link");
    console.log(section);

    const setBackgroundColor = () => {
        if (section === "University") return styles.university;
        else if (section === "Menagerie") return styles.menagerie;
        else if (section === "Sports") return styles.sports;
        else if (section === "Vanguard") return styles.vanguard;
        else if (section === "Opinion") return styles.opinion;
        else return null;

    }

    return (
        <div className={`${styles.body__wrapper__full} ${setBackgroundColor()}`}>
            <div className={styles.background__image__wrapper}>
                <img className={styles.background__image__img} src={article.jetpack_featured_media_url}/>
            </div>
            <div className={styles.background__content__wrapper}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum perferendis, vel eaque quo est adipisci accusamus porro voluptate assumenda nostrum aliquam quis facere voluptates? Architecto doloribus voluptas fugiat nihil minus sequi molestiae repellendus doloremque eius, consectetur officia commodi quidem similique porro facere reprehenderit! Magnam, voluptate adipisci. Quibusdam ex vel at ad optio magnam saepe eaque tempora accusantium autem dicta, iste, sed molestias tenetur, veniam nulla distinctio dolores itaque ab praesentium alias facilis placeat sint cum! Mollitia ex magnam inventore unde, sit omnis ab illo sunt, non, ratione quasi totam quia aliquam tempore vel voluptatum quae odio consequuntur! Quos eius nihil porro ullam? Impedit, repudiandae pariatur, asperiores cupiditate explicabo consequuntur perferendis et sed, facilis esse quia quas! Ducimus ipsa saepe sed, repudiandae nam sit reiciendis non illum accusamus quos tempore ipsum iure voluptates vero amet aut rem delectus odio iusto. Quas modi, magnam voluptatibus asperiores eaque recusandae inventore est labore voluptatem id explicabo quidem obcaecati nesciunt maiores eligendi illum tenetur! Adipisci quidem quas nam rerum, et magni accusantium porro quo veniam illo corrupti inventore sunt voluptatem ipsa illum aut. Harum dolorum nam culpa in a. Et, possimus. Omnis tempora, deserunt magni hic id ratione culpa. Distinctio, aperiam. Quasi ipsa suscipit, quas repellendus error accusantium aut atque! Autem nesciunt possimus eligendi, incidunt corporis commodi! Dignissimos expedita, ullam accusantium minus nobis, totam necessitatibus deserunt optio voluptas amet nulla adipisci suscipit incidunt officiis sunt itaque sint debitis recusandae, corporis dolor qui maiores ducimus! Laborum aspernatur ut inventore, dolore, quos quasi tempora alias vitae illo porro adipisci quas cumque voluptas voluptatum labore repellat aliquam veritatis nulla, praesentium earum dolores laudantium doloremque ducimus placeat. Aperiam aut architecto dolor, quas sequi facilis harum maiores libero nemo vitae, debitis repellendus ipsum repudiandae sed eveniet accusantium? Accusamus magnam officiis magni commodi debitis optio, dicta asperiores exercitationem cumque excepturi sed, tempora minus eos consectetur nobis quisquam animi reprehenderit odio inventore vero cum sit aut fuga! Quia illo voluptate cupiditate perspiciatis odio, enim sequi architecto ducimus exercitationem, explicabo dolores asperiores dicta necessitatibus deserunt ex? Nesciunt eum voluptate illum atque quia distinctio molestiae aspernatur veritatis, in assumenda, laborum perferendis esse? A, obcaecati sit sequi doloribus magnam modi eaque nihil maiores nesciunt, ut velit eum id ullam officiis. Maiores eligendi corrupti, expedita iusto dolor facilis? Numquam enim ex beatae accusamus, ea consequuntur eligendi sit nostrum natus quod impedit sunt ut deserunt porro itaque incidunt adipisci odio architecto recusandae exercitationem! Aliquam, quasi, vero itaque, impedit similique in est a temporibus at rem commodi assumenda doloribus. Facilis expedita doloremque quisquam perspiciatis sed dignissimos sint. Totam impedit neque non odit reiciendis, esse porro animi cupiditate aut. Est consectetur quasi nesciunt nostrum eos suscipit, id dolorum at. Consequatur quod saepe dolores ratione doloremque magni rerum delectus necessitatibus sunt sed, ex atque explicabo veritatis dolorem nesciunt nulla qui aperiam enim eum! Magnam vel suscipit, dignissimos dolorem voluptatem neque asperiores sunt, inventore sit excepturi culpa maxime, quis ipsa consectetur. Tempore delectus facilis sit omnis dicta facere odit. Voluptatum cum non, eligendi rerum vel ipsam placeat nam odio hic? Repellat, consequatur at eius optio excepturi modi animi reiciendis ut aspernatur doloribus voluptate. Distinctio debitis blanditiis laborum laboriosam saepe praesentium eum. Distinctio, consequatur magni, sed asperiores dignissimos quo incidunt iusto nihil in ex nemo sint corporis! Ipsum commodi repellendus sed repellat aperiam sapiente ex voluptatem quas ratione error, provident consectetur magni natus eos ipsa doloribus inventore quod, pariatur tempora. Voluptatem, quibusdam commodi! Dolorum, voluptate. Natus, provident consequuntur recusandae praesentium deserunt voluptas corporis commodi soluta ullam tenetur accusantium, sint aperiam animi distinctio fuga. Voluptatibus nam reprehenderit excepturi illo autem ipsum dolorem odio accusantium corporis minus quos sequi quidem, quod earum vero impedit? Dolor fuga dolorem veritatis quia, doloribus sit, distinctio rerum libero natus aut officiis error neque excepturi debitis, aliquam quidem corporis? Nesciunt, ab! Ratione dolorum deserunt debitis dicta sed voluptas facere sequi perferendis unde nemo! Quia error asperiores fugit accusamus dolor labore optio dicta sed suscipit aperiam esse quis earum amet voluptas quos eius, vitae ipsum molestiae facere quisquam illum magni. Dignissimos provident ab ullam odit hic explicabo officiis necessitatibus? Ab, molestias. A consectetur quaerat distinctio et ipsum corrupti eum molestias ipsa deserunt sequi mollitia obcaecati facere, voluptatum error unde? Earum odit officia incidunt iure voluptates blanditiis velit! Cupiditate, id eligendi et illum delectus aut. Molestias, inventore praesentium quia eligendi explicabo molestiae voluptatum corrupti quos maxime eius facilis ab! Quos officiis facilis repellat modi nihil ipsum deleniti eligendi vitae labore magni? Laudantium dicta enim iusto officiis recusandae, quae quisquam perferendis ratione totam nostrum similique explicabo rerum ad expedita unde molestiae fugit molestias! Cupiditate cum magni provident eum esse natus porro vel rem possimus, commodi temporibus veritatis, nihil omnis reiciendis numquam at neque tempore et quod eveniet illum debitis. Tempora, temporibus, quidem doloremque beatae consequatur dicta, aperiam dolores maiores mollitia neque ad iusto modi. Porro, accusamus obcaecati repudiandae at quae molestias quibusdam totam eveniet illum odit eligendi, harum nobis fugiat voluptatem suscipit error tempora veritatis dolore aspernatur? Nobis odio consectetur vitae sed magni aliquid dolorum ab totam modi sequi facere error minus, harum laboriosam quae quia architecto animi accusantium quo iste? Corrupti molestiae magnam eum eveniet, mollitia perferendis quia reiciendis dolorum, nisi tenetur veritatis totam pariatur cum iure magni provident, enim neque eligendi! Nulla impedit maiores cum dignissimos magnam modi expedita laboriosam veniam. Dolorem eaque minima temporibus aliquid iste tempore accusantium libero voluptatibus ducimus, incidunt unde facilis delectus! Tempore natus esse pariatur id vel, est consectetur. Maxime minima officiis eos laborum consequuntur sed perferendis quibusdam explicabo beatae perspiciatis deleniti alias, optio error, excepturi odio tenetur fugit culpa, blanditiis accusamus ipsam. Nihil a ipsum laudantium modi, nisi fugit, sapiente quos nostrum dolores sunt perspiciatis totam iure corporis cupiditate pariatur expedita culpa necessitatibus eos consectetur error! Quo, repudiandae ipsam? Debitis sequi accusamus ad impedit repudiandae consequatur asperiores similique aliquam atque possimus, quaerat minima suscipit eos placeat modi repellat nulla inventore ducimus eveniet. Voluptate esse animi nobis! Et, adipisci error. Reiciendis dignissimos temporibus minus qui repellendus. Delectus excepturi molestias nisi. Debitis saepe quis cupiditate magnam dolore excepturi in nesciunt aperiam cumque accusantium dolorum eligendi eius consectetur quos obcaecati facere odit, voluptatibus quaerat vitae similique ut iure nemo quasi minima. Iure debitis aspernatur obcaecati consequuntur laborum exercitationem est blanditiis amet. Et laborum delectus architecto officia, dolorem doloremque saepe sunt expedita cum vitae eum incidunt obcaecati fuga quo cumque deserunt! Laudantium, illum nostrum. Animi labore qui magni officia commodi et esse provident porro maiores possimus culpa similique non, iusto repellendus est nesciunt quos. Ea, vero cupiditate consectetur repudiandae est velit eos, numquam repellat assumenda qui sint consequuntur facere, temporibus culpa! Magni, quidem odit deserunt distinctio quae nihil eum ducimus iste neque, harum consequuntur, soluta eos veniam in illo itaque voluptatum nesciunt sint? Perspiciatis, asperiores nam dolorum mollitia numquam pariatur blanditiis minus dolor tenetur omnis necessitatibus, architecto vero autem excepturi velit corrupti temporibus laborum sit cupiditate aspernatur corporis commodi alias. Tempora, laborum dolores. Perspiciatis reprehenderit, cupiditate, tenetur libero dolores tempore natus nihil fugit aliquid quos commodi sequi nam quod temporibus modi explicabo nisi perferendis molestiae beatae! Consequuntur sapiente exercitationem ipsam ipsa! Officia placeat facilis rem. Tempore repellat facilis voluptates quibusdam eveniet facere mollitia saepe blanditiis incidunt ratione rerum aliquid odit cum excepturi, dignissimos vitae omnis neque similique. Quo nisi cum consequatur, quaerat molestiae officia, placeat dolore animi, odio nihil nam explicabo ipsum? Fugiat, reiciendis. Quo sit unde ducimus. Quo, ab nemo! Officiis hic vitae accusamus soluta nihil provident impedit voluptatibus laborum sed quos rem, a unde delectus quam nostrum quod reiciendis corporis? Accusantium libero harum a ut voluptatum ab expedita animi. At velit praesentium amet dolores ducimus cupiditate iste fugit est, sed dolor quibusdam, vero ipsa mollitia labore explicabo natus placeat excepturi iure quaerat accusantium debitis ad dolorem? Non numquam repellat exercitationem! Ab velit eum sunt voluptatem? Iusto, laborum, architecto nesciunt praesentium dignissimos, minima dolorem eum eveniet culpa doloremque qui reprehenderit eius eos magnam in officia distinctio. A repellat similique commodi hic molestias ex quam illum, quod fuga atque? Obcaecati, reprehenderit vero vitae praesentium consequatur cumque, quod aliquam quam quia, necessitatibus a odit officiis! Tempora debitis sequi sunt quia tenetur molestiae ea nobis laboriosam ipsa fuga quis id dolores eligendi, libero nisi numquam ex atque eaque consequuntur a doloremque alias obcaecati, odio doloribus? Natus dolorem nobis aspernatur obcaecati velit quis nulla optio eius fugit unde, dignissimos iste at sapiente, quasi, itaque sunt voluptatum in accusamus? Optio voluptatem nesciunt et provident possimus perferendis, illo nobis voluptatum officia? Ex deserunt eius tempora? Dolorum voluptates explicabo reprehenderit dolores, deserunt error minima, saepe nisi necessitatibus officiis aperiam animi repudiandae et corrupti laborum beatae molestias earum blanditiis? Delectus veritatis quidem possimus illo dolor vitae eligendi minus dolores, culpa architecto explicabo tempore dignissimos aliquam vero officia fuga earum ex. Porro nulla quod velit voluptatibus quasi consectetur, totam voluptatum reprehenderit excepturi optio architecto officia. Fugit dignissimos quia magnam consequatur facilis corporis! Incidunt corporis reiciendis voluptate unde modi aliquid mollitia fugit, omnis, quod tenetur eligendi quaerat tempore saepe harum. Dignissimos eius ut facilis debitis odio iure quidem quos, adipisci odit dolores amet, et labore ipsa! Ipsam, pariatur dicta. Iusto, autem eius ipsa totam minus quod explicabo alias repellendus? Distinctio maiores impedit ut. Fugiat aperiam dolores vitae. Optio sunt tempore praesentium velit, illo corporis non impedit esse minima, recusandae ratione nostrum, nobis ullam doloremque sapiente. Ratione maxime, amet dolorem nobis officiis, nulla doloribus corporis totam deleniti voluptas blanditiis harum alias iure natus vel labore. Commodi repellat obcaecati autem suscipit sequi. Laudantium aperiam nobis et accusamus quae voluptates facilis cumque vel unde! Alias, dolores tempora fuga earum quis labore ducimus blanditiis quibusdam excepturi dolor eveniet ab? Quaerat iusto optio, pariatur perspiciatis, quos aut unde suscipit itaque harum repellat voluptatibus ad sunt saepe dolorum deserunt quo non. Cupiditate autem mollitia eum accusantium. Laboriosam sit quod magnam facere ipsa? Provident, sint similique! Fuga consequatur sint explicabo delectus a mollitia odio labore, pariatur quam ut? Ipsum facilis, optio molestiae neque quo quae vitae sapiente. Adipisci, ipsam cumque praesentium unde iste perspiciatis fugiat omnis asperiores quasi debitis itaque nemo modi labore, ipsum voluptatem beatae sunt alias voluptate facere velit. Ullam cumque nulla illo id! Expedita sit veniam reprehenderit cum necessitatibus corporis quis soluta nihil recusandae nam, illum, modi dolorem adipisci excepturi nisi illo saepe laudantium placeat quas doloribus. Corrupti enim minus dolorum ratione ipsum quos similique ut hic totam id? Maiores officia aperiam sunt animi ab in quos, fuga ut ipsam odit odio veritatis, magni repudiandae possimus a, corrupti commodi. Voluptas animi molestias nam aperiam cum aut aliquam atque ullam sit fuga, et rerum reiciendis aliquid maxime ut voluptatem natus sint voluptate. Fuga possimus velit optio repellat nihil ex dignissimos doloremque quas aliquam illo. Minima eaque officiis in asperiores error libero. Ratione quam iure ipsum adipisci placeat blanditiis quas quos. Doloremque consequatur quibusdam odit eveniet, delectus porro ut quae dolorum ex impedit? Quasi id nobis, tempore ipsam quibusdam aliquam animi voluptates enim nam consectetur, est saepe voluptas, sequi nemo doloremque totam sed iste vero velit rerum cupiditate. Rem eaque quod mollitia eveniet accusamus iure vitae inventore pariatur perspiciatis, optio illo doloremque officiis dolor eligendi quos adipisci nam recusandae temporibus aliquam autem. Commodi, eos consectetur dolor est sed, illum officiis quos accusamus pariatur quia minima aperiam amet fuga atque delectus, magni ullam deleniti eius temporibus aut sint sunt doloribus. Rem modi unde atque placeat ducimus animi ipsa dolor porro vitae corporis. Aspernatur modi voluptatibus eligendi provident corporis dolore eius quasi, ex nemo laborum, saepe obcaecati maxime suscipit commodi officia delectus animi maiores, dicta explicabo molestias consequuntur ipsam? Est dignissimos ad quasi accusantium rerum dolorum quia qui magnam dolorem totam eos pariatur sint unde iste, sapiente sed sunt cum. Ullam explicabo mollitia atque nisi? Officia, corrupti eligendi facere, aut distinctio deserunt voluptatem nulla accusantium et earum labore fugiat a? Impedit consectetur dicta maxime eos voluptate reiciendis quasi consequatur, nisi officia vero quisquam cupiditate deserunt non qui temporibus atque suscipit inventore repellendus quas! Voluptatum ipsum quaerat eaque exercitationem dolore magnam explicabo debitis, repellat reiciendis dolores voluptate quos dolorem ullam hic vero pariatur iure nemo. Earum, distinctio ullam. Eos rerum hic error consectetur quasi aliquam veritatis corporis consequatur nostrum laudantium corrupti tenetur voluptatem repellat, optio amet!
            </div>
        </div>
    );
}