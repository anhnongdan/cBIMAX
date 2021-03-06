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
use Piwik\Plugins\Referrers\Columns\Website;
use Piwik\Report\ReportWidgetFactory;
use Piwik\Widget\WidgetsList;

class GetWebsites extends Base
{
    protected function init()
    {
        parent::init();
        $this->dimension     = new Website();
        $this->name          = Piwik::translate('CorePluginsAdmin_Websites');
        $this->documentation = Piwik::translate('Referrers_WebsitesReportDocumentation', '<br />');
        $this->recursiveLabelSeparator = '/';
        $this->actionToLoadSubTables = 'getUrlsFromWebsiteId';
        $this->hasGoalMetrics = true;
        $this->order = 5;
        /**
         * [Thangnt 2017-03-10] Deregister unused subcategory for cBimax
         */        
        if (\Piwik\Config::getInstance()->General['bimax_product'] != 'cbimax') {
            $this->subcategoryId = 'Referrers_SubmenuWebsites';
        }
    }

    public function configureView(ViewDataTable $view)
    {
        $view->config->show_exclude_low_population = false;
        $view->config->addTranslation('label', $this->dimension->getName());

        $view->requestConfig->filter_limit = 25;

        if ($view->isViewDataTableId(HtmlTable::ID)) {
            $view->config->disable_subtable_when_show_goals = true;
        }

        $view->config->show_pivot_by_subtable = false;
    }

}
