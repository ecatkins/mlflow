/**
 * This file aggregates utility functions for enabling features configured by flags.
 * In the OSS version, you can override them in local development by manually changing the return values.
 */
/**
 * Disable legacy charts on "compare runs" page in favor of a new chart view
 */
export const shouldDisableLegacyRunCompareCharts = () => false;
/**
 * UI feature preview: displays data lineage (datasets used) in experiment runs
 */
export const shouldEnableExperimentDatasetTracking = () => false;
/**
 * UI feature preview: enables artifact-based ML experiment output data analysis, used for evaluating LLM prediction data
 */
export const shouldEnableArtifactBasedEvaluation = () => true;

export const shouldEnableDeepLearningUI = () => false;

export const shouldEnableDeepLearningUIPhase2 = () => false;

/**
 * UI feature preview: enables prompt lab
 */
export const shouldEnablePromptLab = () => true;

export const shouldUsePathRouting = () => false;
export const shouldEnableShareExperimentViewByTags = () => false;

/**
 * A flag determining if we should display the new models UI.
 */
export const shouldShowModelsNextUI = () => {
  return true;
};
