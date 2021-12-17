import { Button, Input } from "@mui/material";
import { styled } from "@mui/material/styles";
import ImageIcon from '@mui/icons-material/Image';

// const useUploadButtonStyles = makeStyles((theme) =>
//   createStyles({
//     input: {
//       display: "none",
//     },
//   })
// );

// const CustomInput = styled(Input)({
//   display: "none",
// });

export const UploadButton = (props) => {
  //   const classes = useUploadButtonStyles();
        // className={classes.input}
        // style={{display: "none"}}
        // multiple
        return (
    <label htmlFor={`upload-button-${props.name}`}>
      <input
        accept="image/*"
        id={`upload-button-${props.name}`}
        name={props.name}
        type="file"
        onChange={props.onChange}
      />
      <Button variant="outlined" component="Box"  startIcon={<ImageIcon />} {...props}>
        {props.children}
      </Button>
    </label>
  );
};
