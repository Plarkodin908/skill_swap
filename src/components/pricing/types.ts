
export type PlanType = "Free" | "Pro Learner" | "Educator";

export type PlanFeature = {
  name: string;
  free: boolean;
  pro: boolean;
  educator: boolean;
  description?: string;
};

export type PlanDefinition = {
  name: PlanType;
  price: string;
  period: string;
  description: string;
  features: PlanFeature[];
  limitations: PlanFeature[];
  cta: string;
  highlighted: boolean;
  disabled: boolean;
};
