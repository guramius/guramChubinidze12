import AboutProps from "./AboutProps"
import growThogether from "./img/growThogether.png"
import grow_together from "./img/grow_together.png"
import growOld from "./img/growOld.png"
import background from "./img/bg.png"

const AbautUs = () => {

    return (
    <>
        <AboutProps 
            header= "Grow Together"
            text= "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form. "
            bg={background}
            image={growThogether}
            position="absolute z-[-10] top-[10] left-0"
        />
        <AboutProps 
            header="Flowing Conversations"
            text="You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow."
            image ={grow_together}
            flexDirection="flex-row-reverse"
            marginTb="my-[220px]"
        />
        <AboutProps 
            header= "Your Users"
            text= "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately. "
            bg={background}
            image={growOld}
            position="absolute z-[-10] inset-[10] left-0"
        />
    </>
  )
}

export default AbautUs