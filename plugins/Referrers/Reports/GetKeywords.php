<?php
/**
 * Piwik - free/libre analytics platform
 *
 * @link http://piwik.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 *
 */
namespace Piwik\Plugins\Referrers\Reports;

use Piwik\Piwik;
use Piwik\Plugin\ViewDataTable;
use Piwik\Plugins\CoreVisualizations\Visualizations\HtmlTable;
use Piwik\Plugins\CoreVisualizations\Visualizations\JqplotGraph\Evolution;
use Piwik\Plugins\Referrers\Columns\Keyword;
use Piwik\Tracker\Visit;

class GetKeywords extends Base
{
    protected function init()
    {
        parent::init();
        $this->dimension     = new Keyword();
        $this->name          = Piwik::translate('Referrers_Keywords');
        $this->documentation = Piwik::translate('Referrers_KeywordsReportDocumentation', '<br />');
        $this->actionToLoadSubTables = 'getSearchEnginesFromKeywordId';
        $this->hasGoalMetrics = true;
        $this->order = 3;
        
        /**
         * [Thangnt 2017-03-10] Deregister unused subcategory for cBimax
         */        
        if (\Piwik\Config::getInstance()->General['bimax_product'] != 'cbimax') {
            $this->subcategoryId = 'Referrers_SubmenuSearchEngines';
        }
    }

    public function configureView(ViewDataTable $view)
    {
        $view->config->show_exclude_low_population = false;
        $view->config->addTranslation('label', Piwik::translate('General_ColumnKeyword'));

        $view->requestConfig->filter_limit = 25;

        if ($view->isViewDataTableId(HtmlTable::ID)) {
            $view->config->disable_subtable_when_show_goals = true;
        }
    }

}
