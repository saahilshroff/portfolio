import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { getImageUrl } from "../../utils";
import styles from "./Projects.module.css";

export default function ProjectCard({ project }) {
  return (
    <Card sx={{ width: 400 }}>
      <CardMedia
        sx={{ height: 240 }}
        image={getImageUrl(project.image)}
        title={project.title}
        style={{ objectFit: "fill" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {project.title}
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          {project.description}
        </Typography>
        <div className={styles.skillsection}>
          {project.skills.map((skill, index) => (
            <Chip key={index} label={skill} className={styles.pill} />
          ))}
        </div>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          size="medium"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            backgroundColor: "#19376d",
            color: "#fff",
            margin: "0 auto",
            "&:hover": { backgroundColor: "#ffde21", color: "#000" },
          }}
        >
          View Project
        </Button>
      </CardActions>
    </Card>
  );
}
