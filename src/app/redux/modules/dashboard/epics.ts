import { Observable } from 'rxjs';

import { invokeAPI } from '../../../utils/api-invoker';
import { DEPARTMENTS, withBaseUrl } from '../../../constants/api-endpoints';
import { DATA_FETCH_API_CALL, DATA_FETCH_API_START } from './types';
import { fetchStatisticsDataSuccess } from './actions';

export const fetchStatisticsData = (action$: any) => action$
  .ofType(DATA_FETCH_API_CALL)
  .switchMap((_: any) => Observable.of({ type: DATA_FETCH_API_START })
      .concat(
        Observable
          .fromPromise(invokeAPI('get', withBaseUrl(`${DEPARTMENTS}?_embed=employees`)))
          .map((res: any) => fetchStatisticsDataSuccess(res))
          .catch((err: any) => Observable.of({type: 'FETCH_STAT_ERROR', error: err})),
      ),
  );
