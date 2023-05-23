import PageTitle from "@/components/common/pagetitle";
import { Box, Typography } from "@mui/material";

const Reconciliation = () => {
  return (
    <Box sx={{px: "10%"}}>
      <PageTitle title="Reconciliation"/>
      <Box sx={{px: { xs: 0, md: "16%" }, display: 'flex', flexDirection: 'column', alignItems: 'center', mb: "4vh"}}>
        <img src="/sacraments/reconciliation.jpg" width={200}/>
        <Typography sx={{pt: "2vh"}}>Reconciliation is an integral part of who we are as catholic christians.  It is a special sacrament that we treasure and like all treasures, we need to pass it on to our children. Although it is not celebrated within the context of sunday liturgy, it is still a very special event in their lives and needs to be recognized as such. Catechesis for First Sacramental Reconciliation is prior to and a separate formational experience from catechesis for First Eucharist, and is in addition to the on-going catechetical formation. Parents discern the readiness of their children to prepare for and celebrate their First Sacramental experience of Reconciliation in consultation with their pastor or his delegate.<br></br><br></br></Typography>
        <Typography sx={{alignSelf: "start"}}>Our lord gave us the beatitudes, as a description of how we are to live.<br></br><br></br></Typography>
        <Box sx={{px: "2%"}}>
          <Typography>
            <b>Matthew 5:1-11</b><br></br>
            And seeing the multitudes, he went up into the mountain: and when he had sat down, his disciples came unto him: and he opened his mouth and taught them, saying,<br></br>
            Blessed are the poor in spirit: for theirs is the kingdom of heaven.<br></br>
            Blessed are they that mourn: for they shall be comforted.<br></br>
            Blessed are the meek: for they shall inherit the earth.<br></br>
            Blessed are they that hunger and thirst after righteousness: for they shall be filled.<br></br>
            Blessed are the merciful: for they shall obtain mercy.<br></br>
            Blessed are the pure in heart: for they shall see god.<br></br>
            Blessed are the peacemakers: for they shall be called sons of god.<br></br>
            Blessed are they that have been persecuted for righteousness sake: for theirs is the kingdom of heaven.<br></br>
            Blessed are you when men shall reproach you, and persecute you, and say all manner of evil against you falsely, for my sake.'<br></br><br></br>
          </Typography>
        </Box>
        <Typography>
          It would be nice if we always and at all times lived these virtues. It would be wonderful if we always lived the teachings of christ: never felt pride, never struggled with jealousy of another person's talents, popularity, or possessions; never said or did things in anger that hurt another person. But in truth, there is not one of us that is perfect. Each of us has failed to do the good, or avoid the wrong, that we were able to do in some particular situation.<br></br><br></br>

          Our blessed lord understands our needs and weakness very well. And that is why we have been given the sacrament of reconciliation, or confession as it is called. It is the means through which we can encounter our loving god and experience in a human manner the healing words of forgiveness.

          Confession is not some empty ritual which the church continues to offer as a link to a past that is gone. It is the means through which we can speak in absolute confidence - in absolute trust - of exactly who we are and what we have done. It is not to subject ourselves to judgment nor should the sacrament be thought of as receiving punishment. It is the means through which we experience receiving forgiveness and healing.<br></br><br></br>

          When we speak of our frailties and our weakness in the sacrament of confession, we are not speaking only to a man, to a priest. We are also speaking through the priest to christ. And when we hear the words of absolution, "i absolve you from your sins in the name of the father, and of the son, and of the holy spirit", it is not only the priest saying them. It is christ speaking through the church and through the priest to remove the sin that has taken place.<br></br><br></br>

          We might wonder why confession is important. Why can I not just simply tell god I am sorry directly? True, it might be easier. We wouldn't have to admit to another person that we are not all that we could or should be. We wouldn't have to admit the harm, or the wrong that has resulted from our actions. But I think there is a part of us that needs to express in a safe forum exactly who we are; and to hear that no matter what has happened in our life, that we are loved and forgiven by god.<br></br><br></br>

          The beauty of the sacrament is that it allows us to experience in a human manner the admission that we are human - that we sometimes fail to do the good or avoid the evil that we should - and to experience the certainty, the absolute certainty that we are forgiven by god. Forgiven, through the power given to the church by christ through the apostle peter, when he spoke the words, "those whose sins you forgive, they are forgiven..".<br></br><br></br>

          And it is because we are human and experience life in a sentient manner that god, through the church, has given us this sacrament of forgiveness. Not to be considered a duty or obligation, it is an opportunity for healing, for forgiveness, for peace.
        </Typography>
        <Typography variant="h5" fontWeight="bold" sx={{mb: "2vh", alignSelf: "start", mt: "2vh"}}>Preparation</Typography>
        <Typography>Understanding sin and the difference between serious and less serious sin are crucial concepts for the reception of the sacrament of reconciliation. For this reason, the church wisely leaves the decision of readiness in the hands of the parents.<br></br><br></br></Typography>
        <Typography>Six to nine months should separate the first celebration of Reconciliation from preparation for First Eucharist. The curriculum is designed to prepare children for First Reconciliation in the 2nd grade and that the child is 7 years and 9 months old, or older.  The child has been baptized.  One parent is catholic.  Both parents are agreeable to the child proceeding with this sacrament.<br></br><br></br></Typography>
        <Typography>Parents are required to attend reconciliation meetings. These meetings will provide parents with information on how to help prepare their child for this sacrament. They also have received a journal that will help to prepare their child for the worthy reception of this sacrament. The formation which parents are providing at home, and the on-going catechesis, provided through the Parish Catechetical Program, form the foundation for catechesis for First Sacramental Reconciliation.</Typography>
      </Box>
    </Box>
  )
}

export default Reconciliation;