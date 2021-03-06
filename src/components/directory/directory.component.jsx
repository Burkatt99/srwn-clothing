import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
import { selectDirectorySection } from "../../redux/directory/directory.selectors";
import { createStructuredSelector} from "reselect";
import { DirectotyMenuContainer } from "./directory.styles";

const Directory = ({sections}) =>{
        return(
            <DirectotyMenuContainer>
                {sections.map(({id, ...otherSectionProps}) =>(
                    <MenuItem key={id} {...otherSectionProps}/>
                ))
                }
            </DirectotyMenuContainer>
        )
    }
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
})
export default connect(mapStateToProps)(Directory);