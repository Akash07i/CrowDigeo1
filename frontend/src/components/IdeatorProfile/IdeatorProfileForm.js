// import React, { useState } from "react";
// import {
//   TextField,
//   Button,
//   Typography,
//   Container,
//   Grid,
//   MenuItem,
//   Select,
//   InputLabel,
//   FormControl,
//   Avatar,
// } from "@mui/material";
// import { useFormik } from "formik";
// import * as Yup from "yup";

// const IdeatorProfileForm = () => {
//   const [profileImage, setProfileImage] = useState(null);

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setProfileImage(URL.createObjectURL(file));
//     }
//   };

//   const formik = useFormik({
//     initialValues: {
//       fullName: "",
//       username: "",
//       email: "",
//       phoneNumber: "",
//       location: "",
//       website: "",
//       socialLinks: "",
//       emailPreferences: "",
//       privacySettings: "Public",
//       about: "",
//       experience: "",
//       visionGoals: "",
//       teamMembers: "",
//       portfolio: "",
//     },
//     validationSchema: Yup.object({
//       fullName: Yup.string().required("Full Name is required"),
//       username: Yup.string().required("Username is required"),
//       email: Yup.string().email("Invalid email").required("Email is required"),
//       about: Yup.string().required("About section is required"),
//     }),
//     onSubmit: (values) => {
//       console.log("Form Data:", values);
//     },
//   });

//   return (
//     <Container maxWidth="md">
//       <Typography variant="h5" sx={{ mb: 2, textAlign: "center" }}>
//         Ideator Profile Management
//       </Typography>
//       <form onSubmit={formik.handleSubmit}>
//         <Grid container spacing={2}>
//           {/* Profile Picture */}
//           <Grid item xs={12} sx={{ textAlign: "center" }}>
//             <Avatar
//               src={profileImage}
//               sx={{ width: 100, height: 100, margin: "auto" }}
//             />
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               style={{ marginTop: "10px" }}
//             />
//           </Grid>

//           {/* Full Name */}
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Full Name"
//               name="fullName"
//               value={formik.values.fullName}
//               onChange={formik.handleChange}
//               error={formik.touched.fullName && Boolean(formik.errors.fullName)}
//               helperText={formik.touched.fullName && formik.errors.fullName}
//             />
//           </Grid>

//           {/* Username */}
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Username"
//               name="username"
//               value={formik.values.username}
//               onChange={formik.handleChange}
//               error={formik.touched.username && Boolean(formik.errors.username)}
//               helperText={formik.touched.username && formik.errors.username}
//             />
//           </Grid>

//           {/* Email */}
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Email"
//               name="email"
//               type="email"
//               value={formik.values.email}
//               onChange={formik.handleChange}
//               error={formik.touched.email && Boolean(formik.errors.email)}
//               helperText={formik.touched.email && formik.errors.email}
//             />
//           </Grid>

//           {/* Phone Number */}
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Phone Number"
//               name="phoneNumber"
//               value={formik.values.phoneNumber}
//               onChange={formik.handleChange}
//             />
//           </Grid>

//           {/* Location */}
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Location"
//               name="location"
//               value={formik.values.location}
//               onChange={formik.handleChange}
//             />
//           </Grid>

//           {/* Website */}
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Website"
//               name="website"
//               value={formik.values.website}
//               onChange={formik.handleChange}
//             />
//           </Grid>

//           {/* Social Links */}
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Social Media Links"
//               name="socialLinks"
//               value={formik.values.socialLinks}
//               onChange={formik.handleChange}
//             />
//           </Grid>

//           {/* Email Preferences */}
//           <Grid item xs={12}>
//             <FormControl fullWidth>
//               <InputLabel>Email Preferences</InputLabel>
//               <Select
//                 name="emailPreferences"
//                 value={formik.values.emailPreferences}
//                 onChange={formik.handleChange}
//               >
//                 <MenuItem value="Campaign Updates">Campaign Updates</MenuItem>
//                 <MenuItem value="Messages">Messages</MenuItem>
//                 <MenuItem value="Platform News">Platform News</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>

//           {/* Privacy Settings */}
//           <Grid item xs={12}>
//             <FormControl fullWidth>
//               <InputLabel>Privacy Settings</InputLabel>
//               <Select
//                 name="privacySettings"
//                 value={formik.values.privacySettings}
//                 onChange={formik.handleChange}
//               >
//                 <MenuItem value="Public">Public</MenuItem>
//                 <MenuItem value="Private">Private</MenuItem>
//                 <MenuItem value="Unlisted">Unlisted</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>

//           {/* About */}
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="About"
//               name="about"
//               multiline
//               rows={3}
//               value={formik.values.about}
//               onChange={formik.handleChange}
//               error={formik.touched.about && Boolean(formik.errors.about)}
//               helperText={formik.touched.about && formik.errors.about}
//             />
//           </Grid>

//           {/* Experience */}
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Experience & Achievements"
//               name="experience"
//               multiline
//               rows={2}
//               value={formik.values.experience}
//               onChange={formik.handleChange}
//             />
//           </Grid>

//           {/* Vision and Goals */}
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Vision & Goals"
//               name="visionGoals"
//               multiline
//               rows={2}
//               value={formik.values.visionGoals}
//               onChange={formik.handleChange}
//             />
//           </Grid>

//           {/* Team Members */}
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Team Members"
//               name="teamMembers"
//               multiline
//               rows={2}
//               value={formik.values.teamMembers}
//               onChange={formik.handleChange}
//             />
//           </Grid>

//           {/* Portfolio */}
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Portfolio / Previous Work"
//               name="portfolio"
//               multiline
//               rows={2}
//               value={formik.values.portfolio}
//               onChange={formik.handleChange}
//             />
//           </Grid>

//           {/* Submit Button */}
//           <Grid item xs={12} sx={{ textAlign: "center" }}>
//             <Button variant="contained" color="primary" type="submit">
//               Save Profile
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </Container>
//   );
// };

// export default IdeatorProfileForm;

import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Avatar,
  Box,
  Paper,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const IdeatorProfileForm = () => {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      username: "",
      email: "",
      phoneNumber: "",
      location: "",
      website: "",
      socialLinks: "",
      emailPreferences: "",
      privacySettings: "Public",
      about: "",
      experience: "",
      visionGoals: "",
      teamMembers: "",
      portfolio: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full Name is required"),
      username: Yup.string().required("Username is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      about: Yup.string().required("About section is required"),
    }),
    onSubmit: (values) => {
      console.log("Form Data:", values);
    },
  });

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 4, borderRadius: 3, mt: 4 }}>
        <Typography variant="h4" sx={{ mb: 3, textAlign: "center", fontWeight: "bold", color: "#0056A8" }}>
          Ideator Profile Management
        </Typography>

        {/* Profile Picture Upload Section */}
        <Box textAlign="center" sx={{ mb: 3 }}>
          <Avatar src={profileImage} sx={{ width: 120, height: 120, margin: "auto", mb: 2 }} />
          <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: "none" }} id="upload-photo" />
          <label htmlFor="upload-photo">
            <Button variant="outlined" color="primary" component="span">
              Upload Profile Picture
            </Button>
          </label>
        </Box>

        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            {/* Full Name */}
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Full Name" name="fullName" {...formik.getFieldProps("fullName")}
                error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                helperText={formik.touched.fullName && formik.errors.fullName}
              />
            </Grid>

            {/* Username */}
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Username" name="username" {...formik.getFieldProps("username")}
                error={formik.touched.username && Boolean(formik.errors.username)}
                helperText={formik.touched.username && formik.errors.username}
              />
            </Grid>

            {/* Email */}
            <Grid item xs={12}>
              <TextField fullWidth label="Email" name="email" type="email" {...formik.getFieldProps("email")}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>

            {/* Phone Number */}
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Phone Number" name="phoneNumber" {...formik.getFieldProps("phoneNumber")} />
            </Grid>

            {/* Location */}
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Location" name="location" {...formik.getFieldProps("location")} />
            </Grid>

            {/* Website */}
            <Grid item xs={12}>
              <TextField fullWidth label="Website" name="website" {...formik.getFieldProps("website")} />
            </Grid>

            {/* Social Links */}
            <Grid item xs={12}>
              <TextField fullWidth label="Social Media Links" name="socialLinks" {...formik.getFieldProps("socialLinks")} />
            </Grid>

            {/* Email Preferences */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Email Preferences</InputLabel>
                <Select name="emailPreferences" value={formik.values.emailPreferences} onChange={formik.handleChange}>
                  <MenuItem value="Campaign Updates">Campaign Updates</MenuItem>
                  <MenuItem value="Messages">Messages</MenuItem>
                  <MenuItem value="Platform News">Platform News</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Privacy Settings */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Privacy Settings</InputLabel>
                <Select name="privacySettings" value={formik.values.privacySettings} onChange={formik.handleChange}>
                  <MenuItem value="Public">Public</MenuItem>
                  <MenuItem value="Private">Private</MenuItem>
                  <MenuItem value="Unlisted">Unlisted</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* About */}
            <Grid item xs={12}>
              <TextField fullWidth label="About" name="about" multiline rows={3} {...formik.getFieldProps("about")}
                error={formik.touched.about && Boolean(formik.errors.about)}
                helperText={formik.touched.about && formik.errors.about}
              />
            </Grid>

            {/* Experience */}
            <Grid item xs={12}>
              <TextField fullWidth label="Experience & Achievements" name="experience" multiline rows={2} {...formik.getFieldProps("experience")} />
            </Grid>

            {/* Vision and Goals */}
            <Grid item xs={12}>
              <TextField fullWidth label="Vision & Goals" name="visionGoals" multiline rows={2} {...formik.getFieldProps("visionGoals")} />
            </Grid>

            {/* Team Members */}
            <Grid item xs={12}>
              <TextField fullWidth label="Team Members" name="teamMembers" multiline rows={2} {...formik.getFieldProps("teamMembers")} />
            </Grid>

            {/* Portfolio */}
            <Grid item xs={12}>
              <TextField fullWidth label="Portfolio / Previous Work" name="portfolio" multiline rows={2} {...formik.getFieldProps("portfolio")} />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12} sx={{ textAlign: "center", mt: 2 }}>
              <Button variant="contained" color="primary" type="submit" sx={{ px: 4, py: 1.5 }}>
                Save Profile
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default IdeatorProfileForm;
