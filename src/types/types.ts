export interface Info {
  id: string;
  iconUrl?: string;
  title: string;
  description: string;
}

export interface MemberInfo {
  id: string;
  filename: string;
  name: string;
  shares: number;
  job: string;
  description: string;
  commit: number;
  rate: number;
}
