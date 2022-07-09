import mixpanel from "mixpanel-browser";

mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN,{
    persistence: "localStorage",
    secure_cookie: true,
});

const Mixpanel = {
    identify: (id) => {
        mixpanel.identify(id);
    },
    people: {
        set: (props) =>{
            mixpanel.people.set.apply(props);
        }
    }
}

export default Mixpanel;