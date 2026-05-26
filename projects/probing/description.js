document.getElementById('project-probing').innerHTML = `
<div class="timeline-entry">
  <div class="timeline-entry-image">
    <img src="projects/probing/probing_before.jpg" width="160">
  </div>
  <div class="timeline-entry-details">
    <a target="_blank" href="https://arxiv.org/abs/2207.04153">
      <papertitle>Probing Classifiers are Unreliable for Concept Removal and Detection</papertitle>
    </a>
    <br>
    <strong>Abhinav Kumar</strong>,
    <a target="_blank" href="https://chenhaot.com/">Chenhao Tan</a>,
    <a target="_blank" href="http://www.amitsharma.in/">Amit Sharma</a>
    <br><em>NeurIPS</em>, 2022
    <br>
    <a target="_blank" href="https://proceedings.neurips.cc/paper_files/paper/2022/hash/725f5e8036cc08adeba4a7c3bcbc6f2c-Abstract-Conference.html">Conference Version</a>
    /
    <a target="_blank" href="https://arxiv.org/abs/2207.04153">arXiv</a>
    /
    <a target="_blank" href="https://docs.google.com/presentation/d/1Fgz94j-Gi2ghtKHl8272-Kub5YXtiERs2lmnVHckTG4/edit?usp=sharing">Slides</a>
    /
    <a target="_blank" href="projects/probing/probing_neurips_poster.pdf">Poster</a>
    <!-- <p>We show that latent space based concept detection and removal methods like Null-Space Removal (INLP) and adversarial removal, which internally uses probing classifiers, are unreliable. They fail to remove the desired concept and, in the worst case, remove or corrupt other features or concepts from the latent space of the classifier.</p> -->
  </div>
</div>
`;
