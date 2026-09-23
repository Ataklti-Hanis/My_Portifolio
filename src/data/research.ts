import type { ResearchTopic } from '../types';

export const researchData: ResearchTopic = {
  id: "poultry-ai-detection",
  title: "Multimodal AI Abnormality Detection System in Poultry",
  subtitle: "Early Health Anomaly Framework for Precision Livestock Farming",
  statusText: "Research details will be published.",
  abstract: "Precision poultry farming requires continuous, non-invasive health monitoring to detect infectious diseases and welfare distress before physical symptoms escalate. This research presents a conceptual framework combining acoustic vocalization analysis, computer vision spatial trajectory tracking, and ambient environmental telemetry into a unified multimodal machine learning detection engine.",
  problemStatement: "Traditional poultry health inspections rely on periodic manual walk-throughs by farm staff, which are labor-intensive, subjective, and often identify sick birds only after pathogens have transmitted throughout the flock.",
  objective: "To design and evaluate a multi-sensor AI framework that fuses thermal visual streams, sound spectrum features, and air quality telemetry for real-time anomaly detection in laying hen environments.",
  multimodalSensors: [
    "Acoustic Microphones (Vocal Distress & Cough Spectrum Frequency Analysis)",
    "Thermal & RGB Camera Nodes (Activity Level, Clustering & Gait Tracking)",
    "Environmental Telemetry (Ammonia Levels, Temperature, Relative Humidity)",
    "IoT Edge Gateways (Real-time Stream Aggregation & Preprocessing)"
  ],
  aiApproach: "Utilizing deep convolutional neural networks (CNNs) for frame-level video spatial feature extraction, spectral spectrogram transformations for acoustic audio analysis, and lightweight temporal transformers for sensor fusion classification.",
  systemArchitectureDescription: "Distributed IoT edge devices collect high-frequency audio and telemetry data, running local lightweight filtering before streaming feature vectors to a central GPU compute server for multimodal fusion inference.",
  expectedOutcome: "Automated early warning system capable of detecting flock distress and environmental degradation hours before macro-level physiological symptoms emerge.",
  futureWork: "Expansion of field trials across commercial layer farms, model quantization for ultra-low-power microcontrollers, and peer-reviewed journal submission.",
  statusFlow: [
    { step: 1, name: "Research Concept", status: "completed" },
    { step: 2, name: "System Design", status: "completed" },
    { step: 3, name: "Sensor Integration", status: "in-progress" },
    { step: 4, name: "AI Model Development", status: "in-progress" },
    { step: 5, name: "Empirical Testing", status: "planned" },
    { step: 6, name: "Future Publication", status: "planned" }
  ],
  tags: [
    "Artificial Intelligence",
    "Computer Vision",
    "Multimodal Sensor Fusion",
    "Poultry Health Monitoring",
    "Anomaly Detection",
    "IoT Systems"
  ]
};
