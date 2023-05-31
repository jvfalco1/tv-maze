import { Episodes } from '@commons/types/responses/shows';

export type HomeScreensProps = {
  ShowDetails: { id: number };
  EpisodeDetails: { episode: Episodes };
};
